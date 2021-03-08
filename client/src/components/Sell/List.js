import React from 'react';

const SellersList = ({ ...props }) => {

  const listando = props.listSeller.map((item) => {
    //console.log(item)
    return (
      <tr className="" key={item.seller}>
        <td className="">{item.seller}</td>
        <td className="">{item.tokens}</td>
        <td className=""><a href="#">0xf9f9d5460c58108008381d751ce6469c3be3443360580efd6e91a93b82386eb8</a></td>
      </tr>
    )
  })

  return (
    <table className="ui inverted table">
      <thead className="">
        <tr className="">
          <th className="" >Endereço</th>
          <th className="">Tokens</th>
          <th className="">Hash</th>
        </tr>
      </thead>
      <tbody className="">
        {listando}
      </tbody>
      <tfoot className="">
        <tr className="">
          <th className="">3 People</th>
          <th className="">2 Approved</th>
          <th className=""></th></tr>
      </tfoot>
    </table>

  )
}

export default SellersList