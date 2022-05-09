import {
  DatabaseIcon,
  CurrencyDollarIcon,
  GlobeIcon,
} from "@heroicons/react/solid";

export enum TABS {
  Buy = "Buy Forest",
  Stake = "Stake Forest",
  Offset = "Offset",
}

export const navigation = [
  { name: TABS.Buy, icon: CurrencyDollarIcon },
  { name: TABS.Stake, icon: DatabaseIcon },
  { name: TABS.Offset, icon: GlobeIcon },
];

export const SHORT_WALLET = "0xg9h...4k1";
