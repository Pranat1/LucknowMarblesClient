import React, { useState, useEffect } from "react";
import { useLazyQuery, useQuery, useMutation } from "react-apollo";
import {
  getPlacesQuery,
  getSalesQuery,
  addSaleCutEntryMutation,
  getPiecesByLottQuery,
  getLottsQuery,
} from "../../queries/queries";

const AddSaleCutEntry = () => {
  const [lottId, setLottId] = useState("61e0053b0959692a80037b5f");
  const [saleId, setSaleId] = useState();
  const [pieceId, setPieceId] = useState();
  const [quantity, setQuantity] = useState(0);

  const { data: salesData, loading: salesLoading } = useQuery(getSalesQuery);

  const { data: lottsData, loading: lottsLoading } = useQuery(getLottsQuery);

  const [
    fetchPiecesByLottData,
    { data: piecesByLottData, loading: piecesByLottLoading },
  ] = useLazyQuery(getPiecesByLottQuery, { variables: { id: lottId } });

  const [addSaleCutEntry, { data: addSaleCutEntryData }] = useMutation(
    addSaleCutEntryMutation
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    addSaleCutEntry({ variables: { saleId, pieceId, quantity } });
  };

  useEffect(() => {
    if (lottId) {
      console.log("in useffect", lottId);
      fetchPiecesByLottData({ variables: { id: lottId } });
    }
  }, [lottId]);

  if (addSaleCutEntryData) {
    return <div>success</div>;
  }

  return (
    <form id="add-book" onSubmit={handleSubmit}>
      {piecesByLottData && console.log(piecesByLottData)}
      <h2>Add Sale Cut Entry</h2>
      <div className="field">
        <label>Quantity:</label>
        <input
          className="form-control"
          type="number"
          onChange={(e) => setQuantity(e.target.valueAsNumber)}
        />
      </div>
      <div className="field">
        <label>Lott:</label>
        <select
          onChange={(e) => {
            setLottId(e.target.value);
          }}
        >
          <option>Select Lott</option>
          {lottsLoading && <option disabled>Loading Lotts</option>}
          {lottsData &&
            lottsData.lotts.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.nameId}
                </option>
              );
            })}
        </select>
      </div>
      <div className="field">
        <label>Piece:</label>
        <select onChange={(e) => setPieceId(e.target.value)}>
          <option>Select Piece</option>
          {piecesByLottLoading && <option disabled>Loading Pieces</option>}
          {piecesByLottData &&
            piecesByLottData.lott &&
            piecesByLottData.lott.pieces.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.nameId}
                </option>
              );
            })}
        </select>
      </div>

      <div className="field">
        <label>Sale:</label>
        <select onChange={(e) => setSaleId(e.target.value)}>
          <option>Select Sale</option>
          {salesLoading && <option disabled>Loading purchase</option>}
          {salesData &&
            salesData.sales.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.billNumber}
                </option>
              );
            })}
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default AddSaleCutEntry;
