export const CurrentMarker = () => {
  return `
    <div style="position: relative; display: flex; justify-content: center; align-items: center;">
      <div style="
        width: 20px;
        height: 20px;
        background-color: red;
        border-radius: 50%;
        border: 2.5px solid white;
        box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
        z-index: 1;
      "></div>
      <div style="
        position: absolute;
        width: 35px;
        height: 35px;
        background-color: rgba(255, 0, 0, 0.5);
        border-radius: 50%;
        animation: ping 1.5s 2 forwards;
      "></div>
    </div>
  `;
};
