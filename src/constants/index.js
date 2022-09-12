import TOKEN_INFO from "paymentTokenABIs/ERC20.json";

export const NFT_ADDRESS = "0xF33bce3a2F5621188e05002c6d08778a38520847"; // "0xA96E7654330f2C8cF1acD07d3600BAeD6Bf7a417";
export const NFT_MARKET_ADDRESS = "0x9b142FDDF8170A3941879bAc90488F3AB09476c8"; // "0x433403C379b041cC622db6E0d37aa2eFD89a5456";
export const CONTRACT_ADDRESS = "0x9b142FDDF8170A3941879bAc90488F3AB09476c8";
export const NFT_CONTRACT_ADDRESS =
  "0xF33bce3a2F5621188e05002c6d08778a38520847";

export const NFTStorageKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweENmNUVjMmQ5Nzk4NTBjMjU4MmExYzM3MDRiN0U5ZTBmNzMxMzQ3ZDgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzNDg0MTMzNjI4OCwibmFtZSI6IkJOQiJ9.clOWhtSKl6e3jANWHhpWz-Nkgdax09JVtHry_4oXF64";
export const Networks = {
  BSC: 56,
  BSCTestnet: 97,
};
export const PaymentList = [
  { name: "BNB", value: "BNB" },
  { name: "FLOKIN", value: "FLOKIN" },
];
export const DefaultNetwork = 56;
export const DefaultAvatar = "/assets/img/avatars/avatar.jpg";
export const DefaultCoverImage = "/assets/img/bg/bg.png";
export const DefaultNickName = "@user";
export const MAX_LIMIT_FOR_KCS = 200;
export const MAX_LIMIT_FOR_TOKEN = 1000000000;

export const PAYMENT_TOKEN = {
  FLOKIN: {
    tokenAddress: "0x97ea5efdcb5961a99ba5c96123042507c0210ec1",
    abi: TOKEN_INFO,
  },
  BNB: {
    tokenAddress: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
    abi: TOKEN_INFO,
  },
};
