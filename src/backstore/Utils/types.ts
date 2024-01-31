export type CreateBackstoreParams={
    DrugName: string;
    DrugType: string;
    Quantity: number;
    expiryDate?: string;
    CreatedAt:Date;

}
export type UpdatedBackstoreParams={
    DrugName: string;
    DrugType: string;
    Quantity: number;
    expiryDate?: String;
    CreatedAt:Date;

}