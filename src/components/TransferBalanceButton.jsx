import { Button, Modal, Form, Space, Select, Option } from "antd";
import { useState } from "react";

export default function TransferBalanceButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button className="mb-7" onClick={showModal}>
                現貨合約餘額劃轉
            </Button>
            <Modal
                title="餘額劃轉"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form
                    name="transfer-balance"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                >
                    <Form.Item label="從">
                        <Space>
                            <Form.Item
                                name="from"
                                noStyle
                                rules={[
                                    {
                                        required: true,
                                        message: "此項為必填",
                                    },
                                ]}
                            >
                                <Select placeholder="選擇從哪個帳戶">
                                    <Option value="spot">現貨</Option>
                                    <Option value="usdt-futures">
                                        USDT專業合約
                                    </Option>
                                </Select>
                            </Form.Item>
                        </Space>
                    </Form.Item>
                    <Form.Item label="到">
                        <Space>
                            <Form.Item
                                name="to"
                                noStyle
                                rules={[
                                    {
                                        required: true,
                                        message: "此項為必填",
                                    },
                                ]}
                            >
                                <Select placeholder="選擇到哪個帳戶">
                                    <Option value="spot">現貨</Option>
                                    <Option value="usdt-futures">
                                        USDT專業合約
                                    </Option>
                                </Select>
                            </Form.Item>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}
