import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FactsItem from "./FactsItem";
import { valueChange } from "../../redux/counterSlice";


export default function StarWarsFacts() {
  const counter = useSelector((state) => state.counter.valueInput);
  const dispatch = useDispatch();

  const factsInput = [
    'прообразом Чубакки стал пёс режиссёра',
    'актёрам разрешили подобрать любимый цвет для своих световых мечей',
    'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину',
    'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу',
    'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок'
  ];
  const factsOutput = [];

  const handleChange = (evt) => {
    const {value} = evt.target;
    dispatch(valueChange(value))
  }

  for (let i = 0; i < counter; i++) {
    factsOutput.push(factsInput[i]);
  }

  return (
    <section className="form-section">
      <form className="form">
        <label>
          <span className="form-hint">Укажите количество фактов</span>
          <input className="form-input" type="number" name="name" onChange={handleChange} min="1" max="5" value={counter}/>
        </label>
      </form>
      <ul className="form-list">
        {factsOutput.map((i) => <FactsItem key={i} fact={i} />)}
      </ul>
    </section>
  );
}