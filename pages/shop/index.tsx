import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";

const getShop = gql`
  query getshop {
    shops {
      data {
        attributes {
          name
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const Shops = () => {
  const { data } = useQuery(getShop);
  console.log(data);
  return (
    <div>
      {data?.shops.data?.map((shop: any) => {
        return <>{shop.attributes.name}</>;
      })}
    </div>
  );
};

export default Shops;
