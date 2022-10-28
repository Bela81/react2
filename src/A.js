import store from "./store";

export function A() {
  const handleClick = (e) => {
    store.dispatch({
      type: "COLOR",
      payload: e.target.name,
    });
  };

  return (
    <div style={{ border: "2px solid red", padding: 20 }}>
      <button onClick={handleClick} name="red">
        Piros
      </button>
      <button onClick={handleClick} name="green">
        Zöld
      </button>
      <button onClick={handleClick} name="brown">
        Barna
      </button>
      <button onClick={handleClick} name="purple">
        Lila
      </button>
      <button onClick={handleClick} name="pink">
        Rózsaszín
      </button>
    </div>
  );
}
