import { gql } from "apollo-boost";

const getProductsQuery = gql`
  {
    products {
      name
      unit
      id
      color
      thickness
      productType
      placeOfOrigin
      lotts{
        pieces{
          sale{
            id
            billNumber
          }
          length
          width
        }
      }
    }
  }
`;
const addFirmMutation = gql`
  mutation AddFirmMutation($name: String!) {
    addFirm(name: $name) {
      name
    }
  }
`;

const addPlaceMutation = gql`
  mutation AddPlaceMutation($name: String!) {
    addPlace(name: $name) {
      name
    }
  }
`;

const addDiscreteProductEntryMutation = gql`
  mutation AddDiscreteProductEntry(
    $length: Int
    $width: Int
    $height: Int
    $pricePer: Int!
    $productId: ID!
  ) {
    addDiscreteProductEntry(
      length: $length
      width: $width
      height: $height
      pricePer: $pricePer
      productId: $productId
    ) {
      length
    }
  }
`;

const addPieceMutation = gql`
  mutation AddPieceMutation(
    $nameId: Int!
    $placeId: ID!
    $firmId: ID!
    $saleId: ID
    $lottId: ID!
    $length: Int!
    $width: Int!
  ) {
    addPiece(
      nameId: $nameId
      placeId: $placeId
      firmId: $firmId
      saleId: $saleId
      lottId: $lottId
      length: $length
      width: $width
    ) {
      nameId
    }
  }
`;

const addProductMutation = gql`
  mutation AddProduct(
    $unit: String!
    $name: String!
    $color: String!
    $productType: String!
    $placeOfOrigin: String!
  ) {
    addProduct(
      unit: $unit
      name: $name
      color: $color
      productType: $productType
      placeOfOrigin: $placeOfOrigin
    ) {
      unit
      name
    }
  }
`;

const addPurchaseMutation = gql`
  mutation AddPurchase(
    $weight: Int!
    $royelty: Int!
    $expensesId: ID!
    $firmId: ID!
    $date: String!
    $time: String!
    $billNumber: Int!
  ) {
    addPurchase(
      expensesId: $expensesId
      royelty: $royelty
      weight: $weight
      firmId: $firmId
      date: $date
      time: $time
      billNumber: $billNumber
    ) {
      billNumber
    }
  }
`;

const addExpensesMutation = gql`
  mutation AddExpenses(
    $weight: Int!
    $biltyNumber: Int!
    $freight: Int!
    $loading: Int!
    $unloading: Int!
    $date: String!
  ) {
    addExpenses(
      weight: $weight
      biltyNumber: $biltyNumber
      freight: $freight
      loading: $loading
      unloading: $unloading
      date: $date
    ) {
      weight
    }
  }
`;

const addSaleMutation = gql`
  mutation AddSale(
    $CustomerName: String!
    $placeId: ID!
    $productId: ID!
    $cutOrUncut: Int!
    $pricePer: Int!
    $firmId: ID!
    $date: String!
    $time: String!
    $billNumber: Int!
  ) {
    addSale(
      pricePer: $pricePer
      productId: $productId
      cutOrUncut: $cutOrUncut
      placeId: $placeId
      CustomerName: $CustomerName
      firmId: $firmId
      date: $date
      time: $time
      billNumber: $billNumber
    ) {
      billNumber
    }
  }
`;

const getFirmsQuery = gql`
  {
    firms {
      id
      name
    }
  }
`;

const addLottMutation = gql`
  mutation AddLott(
    $nameId: Int!
    $productId: ID!
    $pricePer: Int!
    $placeId: ID!
    $origin: String!
    $firmId: ID!
    $purchaseId: ID
  ) {
    addLott(
      nameId: $nameId
      productId: $productId
      pricePer: $pricePer
      placeId: $placeId
      origin: $origin
      firmId: $firmId
      purchaseId: $purchaseId
    ) {
      nameId
    }
  }
`;

const addDiscretePurchaseMutation = gql`
  mutation AddDiscretePurchase(
    $discreteProductEntryId: ID!
    $purchaseId: ID!
    $quantity: Int!
    $placeId: ID!
    $firmId: ID!
  ) {
    addDiscretePurchase(
      discreteProductEntryId: $discreteProductEntryId
      purchaseId: $purchaseId
      quantity: $quantity
      placeId: $placeId
      firmId: $firmId
    ) {
      place {
        name
      }
    }
  }
`;
const addRefundMutation = gql`
  mutation AddRefund($date: String!, $time: String!, $billNumber: Int!) {
    addRefund(date: $date, time: $time, billNumber: $billNumber) {
      billNumber
    }
  }
`;
const addDiscreteSaleMutation = gql`
  mutation AddDiscreteSale(
    $discreteProductEntryId: ID!
    $saleId: ID!
    $quantity: Int!
  ) {
    addDiscreteSale(
      discreteProductEntryId: $discreteProductEntryId
      saleId: $saleId
      quantity: $quantity
    ) {
      quantity
    }
  }
`;

const addSaleCutEntryMutation = gql`
  mutation AddSaleCutEntry($pieceId: ID!, $saleId: ID!, $quantity: Int!) {
    addSaleCutEntry(pieceId: $pieceId, saleId: $saleId, quantity: $quantity) {
      quantity
    }
  }
`;
const getPiecesByLottQuery = gql`
  query GetLott($id: ID) {
    lott(id: $id) {
      pieces {
        id
        nameId
      }
    }
  }
`;

const getPlacesQuery = gql`
  {
    places {
      id
      name
    }
  }
`;

const getLottsQuery = gql`
  {
    lotts {
      id
      nameId
    }
  }
`;

const getExpensessQuery = gql`
  {
    expensess {
      id
      biltyNumber
    }
  }
`;

const getPurchasesQuery = gql`
  {
    purchases {
      id
      billNumber
    }
  }
`;

const getSalesQuery = gql`
  {
    sales {
      id
      billNumber
      date
    }
  }
`;
const getDiscreteProductEntryQuery = gql`
  {
    discreteProductEntrys {
      id
      length
      width
      product {
        name
      }
    }
  }
`;
const getProductQuery = gql`
    query GetProduct($id: ID){
        product(id: $id) {
          thickness
          name
          color
          unit
          productType
          placeOfOrigin
          lotts{
            nameId
            pieces{
              length
              width
              nameId
              id
              sale{
                billNumber
              }
            }
          }
    }
}
`;

const editPieceSaleMutation = gql`
    mutation EditPieceSale($pieceId: ID!, $saleId: ID!){
      editPieceSale(pieceId:$pieceId, saleId:$saleId){
        saleId
      }
    }
`


export {
  getProductQuery,
  getPiecesByLottQuery,
  addSaleCutEntryMutation,
  addDiscreteSaleMutation,
  addSaleMutation,
  addDiscreteProductEntryMutation,
  addPlaceMutation,
  addFirmMutation,
  addPieceMutation,
  getSalesQuery,
  getExpensessQuery,
  addProductMutation,
  addPurchaseMutation,
  getProductsQuery,
  addExpensesMutation,
  getFirmsQuery,
  addLottMutation,
  getPlacesQuery,
  getLottsQuery,
  getPurchasesQuery,
  getDiscreteProductEntryQuery,
  addDiscretePurchaseMutation,
  addRefundMutation,
  editPieceSaleMutation
};
