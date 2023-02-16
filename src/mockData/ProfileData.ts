import { profileMenu } from "../redux/slices/profile/profile.type";
import Recommendations from "../assets/images/profile/Recommdation.png";
import SavedItem from "../assets/images/profile/SavedItem.png";

export interface IProfileData {
  title: string;
  description: string;
  url: profileMenu;
  img?: string;
}

export const ProfileInfoNav: IProfileData[] = [
  {
    title: "Account Settings",
    url: profileMenu.profile,
    description: "Manage profile and preferences.",
    img: Recommendations,
  },
  {
    title: "My Orders",
    url: profileMenu.orders,
    description: "Manage and edit your orders.",
    img: SavedItem,
  },
];

export const ProfileAccouctNav: IProfileData[] = [
  {
    title: "Address Book",
    description: "Manage shipping & billing addresses.",
    url: profileMenu.address,
  },
  {
    title: "Wallet",
    description: "Manage your payment methods.",
    url: profileMenu.coupons,
  },
  {
    title: "My Orders",
    description: "Manage and edit your orders.",
    url: profileMenu.refer_earn,
  },
  {
    title: "Account Settings",
    description: "Manage profile and preferences.",
    url: profileMenu.help,
  },
];
