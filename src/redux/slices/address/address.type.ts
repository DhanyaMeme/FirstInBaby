export interface IAddress {
  id: string;
  name: string;
  phone: string;
  email: string;
  flatNo: string;
  street: string;
  state: string;
  city: string;
  pin: string;
  landmark: string;
  isDefault: boolean;
}

export interface IAddressState {
  addresses: IAddress[];
  openAddAddress: boolean;
  selectedAddressId: string | undefined;
}
