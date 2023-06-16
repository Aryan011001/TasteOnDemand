import React from "react";

export default function Card() {
  return (
    <div>
      <div>
        <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
          <img src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili-top-view_2829-19996.jpg?w=1480&t=st=1686857206~exp=1686857806~hmac=defbd9b4fa69986ea46cf5879daf2c35ab2b9a8ec6f91e060b8e04d3d8644000" class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text"> IMPORTANT</p>
            <div className="container w-100">

              {
              /* 
                ek drop down menu banaya of size 6 
                isme "e, i" means ki 1 se start ho and 6 tak jaaye as 6 is size of array
              */
              }
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {  {/* ye js hai*/}
                  return (
                    <option key={i + 1} value={i + 1}> {/* ye XML hai */}
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>

              <select className="m-2 h-100 bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline fs-5">
                TotalPrice
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
