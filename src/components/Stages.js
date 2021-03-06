export default function Stages(props) {
  async function handleActStages() {
    console.log(document.querySelector("#actStage").value);
    let data = {
      actual_stage: Number(document.querySelector("#actStage").value),
    };
    try {
      await fetch("http://165.22.192.121:3000/actual_stage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.error(err);
    }
  }

  async function handleTotalStages() {
    console.log(document.querySelector("#totalStages").value);
    let data = {
      total_stage: Number(document.querySelector("#totalStages").value),
    };
    try {
      await fetch("http://165.22.192.121:3000/total_stage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div style={{ marginBottom: "1rem" }}>
      <div>
        <div
          className="input-group mb-3"
          style={{ marginBottom: 0, width: "20%" }}
        >
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Всего стадий
            </span>
          </div>

          <input
            id="totalStages"
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Актуальная стадия
            </span>
          </div>
          <input
            id="actStage"
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <button className="btn-success" onClick={handleTotalStages}>
          {" "}
          Отправить Всего стадий{" "}
        </button>{" "}
        <br />
        <button className="btn-success" onClick={() => handleActStages()}>
          {" "}
          Отправить Актальная стадия{" "}
        </button>
      </div>
    </div>
  );
}
