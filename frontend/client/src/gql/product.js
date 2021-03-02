import { gql } from '@apollo/client';


const COMMON_PRODUCT_DATA = gql`
	fragment ProductCommon on Product {
		ProductID
        SKU
        Name
        Price
        RatingAvg
        image
        RatingCount
        DateCreated
	}
`;




const getAllProducts = gql`
	query {
	    products{
             ...ProductCommon
        }
    }
    ${COMMON_PRODUCT_DATA}
`;


const getAllOrder = gql`
	query {
	    orderhistory{
            orderId
            orderPlaced
            orderdelivered
            status
            shippedto
            productlist{
                 ...ProductCommon
            }
   
        }
    }
     ${COMMON_PRODUCT_DATA}
`;
export {
    getAllProducts, getAllOrder
};
