import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const create = gql`
  mutation createProduct($data: ProductInput!) {
    createProduct(data: $data) {
      data {
        id
        attributes {
          name
          price
          content
        }
      }
    }
  }
`;

const Create = () => {
  const router = useRouter();
  const [value, setValue] = useState({});
  console.log(value);

  const [createPage] = useMutation(create);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleChange = async (e: any) => {
    console.log(e.name);
    setValue(e);
    await createPage({
      variables: {
        data: {
          name: `${e.name}`,
          price: `${e.price}`,
          content: `${e.content}`,
        },
      },
    });
    router.push("/");
  };

  // axios({
  //   url:'http://localhost:1337/graphql',
  //   method:'post',
  //   data:{
  //     query: `
  //     query posts {
  //       posts {
  //         data {
  //           attributes {
  //             title,
  //             desciption
  //           }
  //         }
  //       }
  //     }`
  //   }
  // }).then((result) => {
  //   console.log(result.data);
  // })

  // axios({
  //   url:'http://localhost:1337/graphql',
  //   method:'post',
  //   data:{
  //     mutation: `
  //     mutation createPost{
  //       createPost(
  //         data: {
  //           title:"test from next"
  //           description:"test from next"
  //           content:"test from next"
  //         }
  //       ){
  //         data {
  //           id
  //             attributes{
  //               title,
  //               description
  //             }
  //         }
  //       }

  //     }`
  //   }
  // }).then((result) => {
  //   console.log(result);
  // })

  return (
    <div className="row mt-5">
      <div className="col-md-4 card m-auto shadow-lg">
        <form onSubmit={handleSubmit(handleChange)}>
          <div className="car-body">
            <div>
              <label className="underline" htmlFor="name">
                Name
              </label>
              <input className="form-control" {...register("name")} />
            </div>
            <div>
              <label className="underline" htmlFor="price">
                price
              </label>
              <input className="form-control" {...register("price")} />
            </div>
            <div>
              <label className="underline" htmlFor="content">
                content
              </label>
              <input className="form-control" {...register("content")} />
            </div>
          </div>

          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
