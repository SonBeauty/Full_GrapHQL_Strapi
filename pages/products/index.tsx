import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import styles from "../../styles/Products.module.scss";
import Image from "next/image";

const getProduct = gql`
  query getproduct {
    products {
      data {
        attributes {
          name
          price
          content
          image {
            data {
              id
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
interface product {
  attributes: attributes;
}

interface attributes {
  id: number;
  content: string;
  price: number;
  image: images;
  name: string;
  url: string;
}

interface images {
  data: data;
}
interface data {
  attributes: attributes;
}
const Products = () => {
  const { data } = useQuery(getProduct);
  console.log(data);
  return (
    <div>
      {data?.products.data.map((product: product) => {
        return (
          <div key={product.attributes.id} className={styles.card}>
            <div className={styles.basicInfo}>
              <div className={styles.title}>
                <div className={styles.name}>{product.attributes.name}</div>
                <div className={styles.info}>{product.attributes.content}</div>
              </div>
              <div className={styles.images}>
                <Image
                  src="getStrapiMedia(product.attributes.image.data.attributes.url)"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <div className={styles.price}>{product.attributes.price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
