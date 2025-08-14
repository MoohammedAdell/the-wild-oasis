import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { deletCabins } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FaCheckCircle, FaSpinner, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
// const MaxCapacity = styled.div`
//   font-family: "Sono";
//   font-weight: 800;
// `;

function CabinRow({ cabin }) {
  const {
    name,
    regularPrice,
    discount,
    image,
    maxCapacity,
    id: cabinId,
  } = cabin;

  const queryClint = useQueryClient();

  const {
    isPending: isDeleting,
    isSuccess,
    mutate,
  } = useMutation({
    mutationFn: deletCabins,
    onSuccess: () => {
      toast.success("Cabin deleted successfully...");

      queryClint.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <TableRow>
      <Img src={image} alt={name} />
      <Cabin>{name}</Cabin>
      <div> Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>
      <button onClick={() => mutate(cabinId)} disabled={isDeleting}>
        {isDeleting ? (
          <FaSpinner className="animate-spin" />
        ) : isSuccess ? (
          <FaCheckCircle />
        ) : (
          <FaTrash />
        )}
      </button>
    </TableRow>
  );
}

export default CabinRow;
