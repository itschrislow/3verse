import {
  DatabaseIcon,
  CurrencyDollarIcon,
  GlobeIcon,
  ChartBarIcon,
} from "@heroicons/react/solid";

export enum TABS {
  Buy = "Buy Trees",
  Stake = "Stake Trees",
  Offset = "Offset",
  Exchange = "Exchange",
}

export const navigation = [
  { name: TABS.Buy, icon: CurrencyDollarIcon },
  { name: TABS.Stake, icon: DatabaseIcon },
  { name: TABS.Offset, icon: GlobeIcon },
  { name: TABS.Exchange, icon: ChartBarIcon },
];

export const SHORT_WALLET = "0xg9h...4k1";
