import PropTypes from "prop-types";
import useProduct from "../../../Hooks/useProduct";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import useIncreaseUpdateQuantity from "../../../Hooks/useIncreaseUpdateQuantity";

const CartTableRow = ({ item, refetchCart, setTotal }) => {
    const axiosPublic = useAxiosPublic();
    const { products } = useProduct();
    const handleQuantityUpdate = useIncreaseUpdateQuantity();
    const [quantityCount, setQuantityCount] = useState(item?.selectedQuantity || 1);
    const [disableBtn, setDisableBtn] = useState(false);
    const product = products.find(product => product?._id === item?.mainProductId);

    useEffect(() => {
        if (product) {
            const subtotal = calculateSubtotal(product?.price, quantityCount);
            setTotal(prev => ({ ...prev, [item._id]: parseFloat(subtotal) }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantityCount, product]);

    if (!product) {
        return null;
    }
    const increaseCount = () => {
        if (quantityCount >= parseInt(product?.quantity)) {
            toast.error("Stocks Out");
            setDisableBtn(true);
            return;
        } else {
            const increasedCount = quantityCount + 1;
            setQuantityCount(increasedCount);
        }
    };
    const decreaseCount = () => {
        if (quantityCount > 1) {
            const decreasedCount = quantityCount - 1;
            setQuantityCount(decreasedCount);
            setDisableBtn(false);
        }
    };


    const handleDeleteCart = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                const subtotal = calculateSubtotal(product?.price, quantityCount);
                subtotal;
                axiosPublic.delete(`/carts/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount) {
                            handleQuantityUpdate(product, item, refetchCart);
                            refetchCart();
                            setTotal(prev => {
                                const newTotal = { ...prev };
                                delete newTotal[id];
                                return newTotal;
                            });
                            toast.success("Item removed from cart!");
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        toast.error("Failed to remove item!");
                    });
            }
        });
    };

    const calculateSubtotal = (price, quantity) => (price * quantity).toFixed(2);

    return (
        <tr className="border-b">
            <td className="flex items-center justify-center md:text-lg">
                <Link to={`/productDetails/${product?._id}`}>
                    <img
                        src={product.images[0]}
                        alt={product.title}
                        className="h-16 w-16 object-contain"
                    />
                </Link>
            </td>
            <td className=" text-center py-4 px-4">
                <p className="flex justify-center items-center gap-x-1">
                    <FaBangladeshiTakaSign />
                    {product?.price.toFixed(2)}
                </p>
            </td>
            <td className=" text-center py-4 px-4">
                <div className="border border-slate-300 rounded-md px-2 md:px-auto py-2 flex justify-around items-center gap-x-2">
                    <button
                        type="button"
                        onClick={decreaseCount}
                        className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                        aria-label="Decrease"
                        disabled={quantityCount === 1}
                    >
                        &minus;
                    </button>
                    <span>{quantityCount}</span>
                    <button
                        type="button"
                        onClick={increaseCount}
                        className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                        disabled={disableBtn}
                    >
                        +
                    </button>
                </div>
            </td>
            <td className="text-center py-4 px-4">
                <p className="flex justify-center items-center gap-x-1">
                    <FaBangladeshiTakaSign />
                    {calculateSubtotal(product?.price, quantityCount)}
                </p>
            </td>
            <td
                onClick={() => handleDeleteCart(item?._id)}
                className="py-4 px-4 text-center text-blue-500 cursor-pointer"
            >
                ✕
            </td>
        </tr>

    );
};

CartTableRow.propTypes = {
    item: PropTypes.object.isRequired,
    refetchCart: PropTypes.func.isRequired,
    setTotal: PropTypes.func.isRequired,
};

export default CartTableRow;
