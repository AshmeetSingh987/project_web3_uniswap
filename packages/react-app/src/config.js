import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS="0x42B9fa18ef60b00148F92eD858DAdC24e902a0A7";

export const DAPP_CONFIG={
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/vQ-OV0UYcgr7aNxejNV-xf1Lui6EcHOA",
  },
};
