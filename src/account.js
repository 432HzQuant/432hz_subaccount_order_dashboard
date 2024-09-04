export const accountAPI = {
    spot: {
        hzBitget: {
            apiKey: process.env.HZBITGET_BITGET_API_KEY,
            secret: process.env.HZBITGET_BITGET_SECRET_KEY,
            password: process.env.HZBITGET_BITGET_PASSWORD,
            options: {
                defaultType: "spot",
                createMarketBuyOrderRequiresPrice: false,
            },
        },
        // test: {
        //     apiKey: process.env.TEST_BITGET_API_KEY,
        //     secret: process.env.TEST_BITGET_SECRET_KEY,
        //     password: process.env.TEST_BITGET_PASSWORD,
        //     options: {
        //         defaultType: "spot",
        //         createMarketBuyOrderRequiresPrice: false,
        //     },
        // },
    },
    "usdt-futures": {
        hzBitget: {
            apiKey: process.env.HZBITGET_BITGET_API_KEY,
            secret: process.env.HZBITGET_BITGET_SECRET_KEY,
            password: process.env.HZBITGET_BITGET_PASSWORD,
            options: {
                defaultType: "future",
                createMarketBuyOrderRequiresPrice: false,
            },
        },
        // test: {
        //     apiKey: process.env.TEST_BITGET_API_KEY,
        //     secret: process.env.TEST_BITGET_SECRET_KEY,
        //     password: process.env.TEST_BITGET_PASSWORD,
        //     options: {
        //         defaultType: "future",
        //         createMarketBuyOrderRequiresPrice: false,
        //     },
        // },
    },
};

export const accountOptions = [
    {
        value: "hzBitget",
        label: "hzBitget",
    },
    // {
    //     value: "test",
    //     label: "test",
    // },
];
