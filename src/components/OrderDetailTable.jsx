import React from "react";
import { Table, Button, Spin, Popconfirm } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { transformTimestampToTaipeiDatetime } from "@/utils";

export default function OrderDetailTable(props) {
    const { dataSource, cancelOrderLoading, tradingMarket } = props;

    const spotColumns = [
        {
            title: "幣種",
            width: 100,
            dataIndex: "symbol",
            key: "symbol",
            fixed: "left",
        },
        {
            title: "方向",
            width: 60,
            dataIndex: "side",
            key: "side",
            fixed: "left",
            render: (side) => (
                <div
                    className={
                        side === "buy" ? "text-green-500" : "text-red-600"
                    }
                >
                    {side}
                </div>
            ),
        },
        {
            title: "下單價格",
            width: 150,
            dataIndex: "price",
            key: "price",
        },
        {
            title: "下單數量(token)",
            width: 150,
            dataIndex: "amount",
            key: "amount",
        },
        {
            title: "未成交數量(token)",
            width: 150,
            dataIndex: "remaining",
            key: "remaining",
        },
        {
            title: "下單時間(台灣)",
            width: 150,
            dataIndex: "timestamp",
            key: "timestamp",
            render: (timestamp) => (
                <div>{transformTimestampToTaipeiDatetime(timestamp)}</div>
            ),
        },
        {
            title: "最後更新時間(台灣)",
            width: 150,
            dataIndex: "lastUpdateTimestamp",
            key: "lastUpdateTimestamp",
            render: (lastUpdateTimestamp) => (
                <div>
                    {transformTimestampToTaipeiDatetime(lastUpdateTimestamp)}
                </div>
            ),
        },
        {
            title: "取消訂單",
            key: "operation",
            fixed: "right",
            width: 100,
            render: (value) => (
                <Spin spinning={cancelOrderLoading}>
                    <Popconfirm
                        title="刪除所選訂單"
                        description="確定刪除所選訂單？"
                        okText="確定"
                        cancelText="取消"
                        icon={
                            <QuestionCircleOutlined
                                style={{
                                    color: "red",
                                }}
                            />
                        }
                        onConfirm={() =>
                            props.cancelOpenOrder(value.id, value.symbol)
                        }
                    >
                        <Button type="primary" danger className="mr-4">
                            取消訂單
                        </Button>
                    </Popconfirm>
                </Spin>
            ),
        },
    ];

    const futureColumns = [
        {
            title: "幣種",
            width: 100,
            dataIndex: "symbol",
            key: "symbol",
            fixed: "left",
            render: (symbol) => <div>{symbol.split(":")[0]}</div>,
        },
        {
            title: "方向",
            width: 60,
            dataIndex: "side",
            key: "side",
            fixed: "left",
            render: (side) => (
                <div
                    className={
                        side === "long" ? "text-green-500" : "text-red-600"
                    }
                >
                    {side}
                </div>
            ),
        },
        {
            title: "下單價格",
            width: 150,
            dataIndex: "entryPrice",
            key: "entryPrice",
        },
        {
            title: "下單數量(token)",
            width: 150,
            dataIndex: "contracts",
            key: "contracts",
        },
        {
            title: "未實現損益",
            width: 150,
            dataIndex: "unrealizedPnl",
            key: "unrealizedPnl",
            render: (unrealizedPnl) => (
                <div
                    className={
                        unrealizedPnl > 0 ? "text-green-500" : "text-red-600"
                    }
                >
                    {unrealizedPnl}
                </div>
            ),
        },
        {
            title: "未實現損益(%)",
            width: 150,
            dataIndex: "percentage",
            key: "percentage",
            render: (percentage) => (
                <div
                    className={
                        percentage > 0 ? "text-green-500" : "text-red-600"
                    }
                >
                    {percentage}%
                </div>
            ),
        },
        {
            title: "槓桿",
            width: 150,
            dataIndex: "leverage",
            key: "leverage",
        },
        {
            title: "下單時間(台灣)",
            width: 150,
            dataIndex: "timestamp",
            key: "timestamp",
            render: (timestamp) => (
                <div>{transformTimestampToTaipeiDatetime(timestamp)}</div>
            ),
        },
        {
            title: "平倉",
            key: "operation",
            fixed: "right",
            width: 100,
            render: (value) => (
                <Spin spinning={cancelOrderLoading}>
                    <Popconfirm
                        title="平倉所選訂單"
                        description="確定平倉所選訂單？"
                        okText="確定"
                        cancelText="取消"
                        icon={
                            <QuestionCircleOutlined
                                style={{
                                    color: "red",
                                }}
                            />
                        }
                        onConfirm={() =>
                            props.cancelOpenOrder(value.id, value.symbol)
                        }
                    >
                        <Button type="primary" danger className="mr-4">
                            平倉
                        </Button>
                    </Popconfirm>
                </Spin>
            ),
        },
    ];
    // console.log(dataSource);

    return (
        <Table
            dataSource={dataSource}
            columns={tradingMarket === "spot" ? spotColumns : futureColumns}
            scroll={{
                x: 200,
            }}
        ></Table>
    );
}
