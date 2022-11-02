import { ReactComponent as Box } from "assets/images/icons/box.svg";
import { ReactComponent as BoxTick } from "assets/images/icons/box-tick.svg";
import { ReactComponent as Tag } from "assets/images/icons/tag.svg";

export const PackagesSummary = [
  {
    id: 1,
    title: "تمام بسته ها",
    icon: <Box />,
    info: "لیست تمام بسته هایی که شما در پنل استریمر ساختید",
    count: "06", // temporarily
  },
  {
    id: 2,
    title: "بسته های فعال",
    icon: <BoxTick />,
    info: "لیست تمام بسته هایی که در پنل استریمر در حال نمایش است.",
    count: "04", // temporarily
  },
  {
    id: 3,
    title: "بسته های فروخته شده",
    icon: <Tag />,
    info: "تعداد تمام بسته هایی که تا کنون در پنل شما به فروش رفته است.",
    count: "691", // temporarily
  },
];

export const PackagesTab = [
  {
    id: 1,
    title: "تمام بسته ها",
    key: "all",
  },
  {
    id: 2,
    title: "بسته های فعال",
    key: "active",
  },
  {
    id: 3,
    title: "بسته های غیر فعال",
    key: "inactive",
  },
];
