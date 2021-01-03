import React from "react";
import "./../css/tile.css";
import "./../css/button.css";
import "./../css/shashlik.css";

const Tile = ({ id, data, active, setActive }) => {
  const isActive = active === id ? true : false;
  const watchKeyPress = (e) => {
    if (e.code === "Enter" || e.code === "Space") setActive(id);
  };

  return (
    <div
      onClick={() => setActive(id)}
      onKeyPress={watchKeyPress}
      className={`${isActive ? "tile tile--expanded" : "tile"}`}
    >
      <div className='tile__top-section'>
        <div className='tile__top-section-bank-name'>{data.bankName}</div>
        {isActive && (
          <div className='shashlik'>
            <div className='shashlik__dot'></div>
            <div className='shashlik__dot'></div>
            <div className='shashlik__dot'></div>
          </div>
        )}
      </div>

      <div className='tile__header'>
        <div className='tile__header-wrapper'>
          <h2 className='tile__header-title'>
            <button
              className='tile__header-button'
              aria-expanded={isActive}
              aria-controls={`tile-${id}`}
              aria-disabled={isActive ? true : false}
            >
              <span className='tile__header-account-name'>
                {data.accountName}
              </span>
            </button>
          </h2>

          <span className='tile__header-nrb'>{data.nrb}</span>
        </div>

        {!isActive && (
          <div className='tile__header-wrapper'>
            <span className='tile__label'>Dostępne środki</span>
            <span
              className={`${
                data.availableFunds < 0
                  ? "tile__funds tile__funds--red"
                  : "tile__funds"
              }`}
            >
              {data.availableFunds}&nbsp;
              <span className='tile__currency'>PLN</span>
            </span>
          </div>
        )}
      </div>

      {isActive && (
        <div className='tile__expanded-section' id={`tile-${id}`}>
          <div className='tile__info-bar'>
            <div className='tile__info-bar-container'>
              <table className='tile__info-bar-table'>
                <tbody>
                  <tr className='tile__info-bar-table-row'>
                    <td className='tile__info-bar-table-cell'>
                      <span className='tile__label'>Saldo</span>
                    </td>
                    <td className='tile__info-bar-table-cell'>
                      <span
                        className={`${
                          data.accountBalance < 0
                            ? "tile__label tile__label--red"
                            : "tile__label"
                        }`}
                      >
                        {data.accountBalance}&nbsp;PLN
                      </span>
                    </td>
                  </tr>
                  <tr className='tile__info-bar-table-row'>
                    <td className='tile__info-bar-table-cell'>
                      <span className='tile__label'>Blokady</span>
                    </td>
                    <td className='tile__info-bar-table-cell'>
                      <span
                        className={`${
                          data.locks < 0
                            ? "tile__label tile__label--red"
                            : "tile__label"
                        }`}
                      >
                        {data.locks}&nbsp;PLN
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='tile__info-bar-wrapper'>
              <span className='tile__label'>Dostępne środki</span>
              <span
                className={`${
                  data.availableFunds < 0
                    ? "tile__funds tile__funds--red"
                    : "tile__funds"
                }`}
              >
                {data.availableFunds}&nbsp;
                <span className='tile__currency'>PLN</span>
              </span>
            </div>
          </div>
          <div className='tile__buttons-bar'>
            <button className='button button--white'>Historia</button>
            <button className='button button--blue'>Przelew</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tile;
