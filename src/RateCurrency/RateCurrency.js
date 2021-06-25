import React, { useEffect, useState } from "react";
import style from "./RateCurrency.module.css";
import "antd/dist/antd.css";
import { Card } from "antd";

const RateCurrency = () => {
  let [cur, setCur] = useState([]);

  useEffect(
    () =>
      fetch("https://www.nbrb.by/api/exrates/rates?periodicity=0")
        .then((Response) => Response.json())
        .then((cur) => {
          setCur(cur);
        }),
    []
  );

  return (
    <div>
      <h1>Курс белорусского рубля по отношению к иностранным валютам:</h1>
      <div className={style.currency}>
        {cur.map((m) => {
          return (
            <div className={style.currency_table}>
              <div key={m.Cur_ID} className={style.currency_siteCard}>
                <Card title={m.Cur_Name} bordered={false} style={{ width: 300 }}>
                  <p>
                    <b>Abbreviation: </b> {m.Cur_Abbreviation}
                  </p>
                  <p>
                  <b>Amount of currency : </b>{m.Cur_Scale} 
                  </p>
                  <p>
                    <b>Date: </b>
                    {new Date(m.Date).toLocaleDateString()}
                  </p>
                  <p>
                    <b>Official Rate: </b>
                    <b style={{ color: "orange" }}>{m.Cur_OfficialRate}</b>
                  </p>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RateCurrency;
