import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS="0xC8DD64d8FC2A1328D11cc7950E0d2f2e6DF1C748";

export const DAPP_CONFIG={
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/vQ-OV0UYcgr7aNxejNV-xf1Lui6EcHOA",
  },
};