import React, { useState } from "react";
import logo from './La_Nacion_Logo.png';

export default function Header() {

  // const [isActive, setActive] = useState(false);

  // const handleMenu = () => {
  //   setActive(!isActive);
  // };

  // const handleEscape = (e) => {
  //   if (e.key === 'Escape') {
  //     setActive(false);
  //   }
  // };
  return (
    // <!-- HEADER: Start -->
    <>
{/* <header className={`header ${isActive ? '--active-menu' : ''}`}>
      <button className="com-hamburger" onClick={handleMenu}>
        Hamburger
      </button>
      <nav>
        {/* Contenido del menú 
      </nav>
      {isActive && (
        <div className="overlay" onClick={handleMenu}></div>
      )}
      {/* La overlay es una capa que cubre toda la pantalla para cerrar el menú cuando se hace clic fuera de él 
    </header> */}
    <header className="header">
      <div className="lay" >
        <div className="row">
          <div className="col-4 header__left" >
            <div className="com-hamburger">
              <span className="com-hamburger__bar"></span>
              <span className="com-hamburger__bar"></span>
              <span className="com-hamburger__bar"></span>


            </div>
            <form className="com-search">
              <input type="text" className="com-search__input" placeholder="Buscar" />
              <i className="com-icon "><svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24"><path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11  2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867  4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="#272727"></path></svg></i>
              <input type="submit" value="Buscar" className="--btn --primary com-search__submit" />
            </form>
          </div>
               {/* <img src={logo} alt="Logo" className="logo-la-nacion" /> */}
            
          <div className="col-4 header__middle">
             <a href="https://www.lanacion.com.ar/" class="logo-la-nacion" target="_top"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-15077.383 26 200 19.802"><g id="Logo_LN" data-name="Logo LN" fill="#006998" transform="translate(-15657.383 8)"><path id="Path_1" data-name="Path 1" d="M0,18.847v-1.3H3.26V1.294H0V0H13.036V1.294H9.445V17.551h.767c4.283,0,7.7-1.111,7.7-5.4v-.812h1.612v7.5Z" transform="translate(580 18.396)"></path><path id="Path_2" data-name="Path 2" d="M23.925,17.523,14.232,0H11.791L3.447,15.927a2.859,2.859,0,0,1-2.788,1.6H0v1.3H7.825v-1.3H6.41c-.821,0-1.534-.1-1.534-.98a1.746,1.746,0,0,1,.288-.8 L6.28,13.568h8.462l2.124,3.954H13.741v1.3H26.636v-1.3h-2.71ZM6.957,12.284l3.412-6.4h.278l3.417,6.4Z" transform="translate(600.654 18.594)"></path><path id="Path_3" data-name="Path 3" d="M0,18.847v-1.3H.944c1.134,0,2.2-.293,2.2-1.923V3.4A2.323,2.323,0,0,0,.669,1.294H.113V0H9.53L19.913,11.135h.075V2.816c0-1.027-.882-1.521-2.5-1.521 H16.51V0h8.048V1.294h-.79c-1.666,0-2.35.767-2.35,1.438V18.847H18.729L4.628,3.67H4.554v12.1c0,1.525.811,1.784,2.848,1.784h.63v1.3Z" transform="translate(639.742 18.396)"></path><path id="Path_4" data-name="Path 4" d="M23.929,17.523,14.25,0H11.8L3.449,15.927a2.843,2.843,0,0,1-2.787,1.6H0v1.3H7.851v-1.3H6.407c-.813,0-1.524-.1-1.524-.98a1.836,1.836,0,0,1,.283-.8 l1.123-2.171h8.474l2.106,3.954H13.745v1.3h12.89v-1.3H23.929ZM6.976,12.284l3.4-6.4h.292l3.4,6.4Z" transform="translate(663.9 18.594)"></path><path id="Path_5" data-name="Path 5" d="M20.464.508V7.193h-1.6c-.6-2.721-2.222-5.908-6.15-5.908C7.8,1.286,6.786,5.17,6.786,9.932c0,4.573.912,8.506,5.808,8.506,3.825,0,6.408-2.452,6.408-5.8 h1.684c0,4.6-3.67,7.166-8.419,7.166C6.184,19.8,0,15.425,0,9.932,0,4.521,5.982,0,11.77,0c4.307,0,5.823,1.592,6.615,1.592S19.369,1.08,19.4.509h1.062Z" transform="translate(690.236 18)"></path><path id="Path_6" data-name="Path 6" d="M0,18.847v-1.3H3.263V1.294H0V0H12.714V1.294H9.437V17.551h3.277v1.3Z" transform="translate(713.939 18.396)"></path><path id="Path_7" data-name="Path 7" d="M12.073,0C6.073,0,0,4.338,0,9.9s6.073,9.9,12.073,9.9c5.967,0,12.146-4.328,12.146-9.9S18.04,0,12.073,0ZM12.1,18.521 c-4.753,0-5.375-4.257-5.375-8.618,0-4.385.643-8.618,5.375-8.618,4.769,0,5.384,4.2,5.384,8.618C17.486,14.293,16.871,18.521,12.1,18.521Z" transform="translate(729.325 18)"></path><path id="Path_8" data-name="Path 8" d="M0,18.847v-1.3H.949c1.128,0,2.193-.293,2.193-1.923V3.4A2.33,2.33,0,0,0,.657,1.294H.1V0H9.516L19.891,11.135h.093V2.816c0-1.027-.881-1.521-2.5-1.521 H16.5V0h8.054V1.294h-.8c-1.654,0-2.358.767-2.358,1.438V18.847H18.711L4.607,3.67H4.54v12.1c0,1.525.8,1.784,2.847,1.784H8.02v1.3Z" transform="translate(755.444 18.396)"></path></g></svg></a>
                
          </div>
          <div className="col-4 header__right">
            {/* Lo hacemos de esta forma para no agregar clases de mas al header ni al com-usuario,
          y mediante un if de react dependiendo de x condicional dibujamos la caja correspondiente */}

            {/*  Se dibuja cuando NO esta logueado */}
            <div className="com-usuario">
              <button className="--btn --highlight hlp-marginRight-35">Suscribite</button>
              <button className="--btn --secondary">Ingresar</button>
            </div>
          </div>

        </div>
      </div>
    </header>

{/* // <!--HEader de mobile (logica react)--> */}
      <header className="header-mobile">
        <div className="lay">
          <div className="row">
            <div className="col-6">
             <a href="https://www.lanacion.com.ar/" class="logo-la-nacion" target="_top"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-15077.383 26 200 19.802"><g id="Logo_LN" data-name="Logo LN" fill="#006998" transform="translate(-15657.383 8)"><path id="Path_1" data-name="Path 1" d="M0,18.847v-1.3H3.26V1.294H0V0H13.036V1.294H9.445V17.551h.767c4.283,0,7.7-1.111,7.7-5.4v-.812h1.612v7.5Z" transform="translate(580 18.396)"></path><path id="Path_2" data-name="Path 2" d="M23.925,17.523,14.232,0H11.791L3.447,15.927a2.859,2.859,0,0,1-2.788,1.6H0v1.3H7.825v-1.3H6.41c-.821,0-1.534-.1-1.534-.98a1.746,1.746,0,0,1,.288-.8 L6.28,13.568h8.462l2.124,3.954H13.741v1.3H26.636v-1.3h-2.71ZM6.957,12.284l3.412-6.4h.278l3.417,6.4Z" transform="translate(600.654 18.594)"></path><path id="Path_3" data-name="Path 3" d="M0,18.847v-1.3H.944c1.134,0,2.2-.293,2.2-1.923V3.4A2.323,2.323,0,0,0,.669,1.294H.113V0H9.53L19.913,11.135h.075V2.816c0-1.027-.882-1.521-2.5-1.521 H16.51V0h8.048V1.294h-.79c-1.666,0-2.35.767-2.35,1.438V18.847H18.729L4.628,3.67H4.554v12.1c0,1.525.811,1.784,2.848,1.784h.63v1.3Z" transform="translate(639.742 18.396)"></path><path id="Path_4" data-name="Path 4" d="M23.929,17.523,14.25,0H11.8L3.449,15.927a2.843,2.843,0,0,1-2.787,1.6H0v1.3H7.851v-1.3H6.407c-.813,0-1.524-.1-1.524-.98a1.836,1.836,0,0,1,.283-.8 l1.123-2.171h8.474l2.106,3.954H13.745v1.3h12.89v-1.3H23.929ZM6.976,12.284l3.4-6.4h.292l3.4,6.4Z" transform="translate(663.9 18.594)"></path><path id="Path_5" data-name="Path 5" d="M20.464.508V7.193h-1.6c-.6-2.721-2.222-5.908-6.15-5.908C7.8,1.286,6.786,5.17,6.786,9.932c0,4.573.912,8.506,5.808,8.506,3.825,0,6.408-2.452,6.408-5.8 h1.684c0,4.6-3.67,7.166-8.419,7.166C6.184,19.8,0,15.425,0,9.932,0,4.521,5.982,0,11.77,0c4.307,0,5.823,1.592,6.615,1.592S19.369,1.08,19.4.509h1.062Z" transform="translate(690.236 18)"></path><path id="Path_6" data-name="Path 6" d="M0,18.847v-1.3H3.263V1.294H0V0H12.714V1.294H9.437V17.551h3.277v1.3Z" transform="translate(713.939 18.396)"></path><path id="Path_7" data-name="Path 7" d="M12.073,0C6.073,0,0,4.338,0,9.9s6.073,9.9,12.073,9.9c5.967,0,12.146-4.328,12.146-9.9S18.04,0,12.073,0ZM12.1,18.521 c-4.753,0-5.375-4.257-5.375-8.618,0-4.385.643-8.618,5.375-8.618,4.769,0,5.384,4.2,5.384,8.618C17.486,14.293,16.871,18.521,12.1,18.521Z" transform="translate(729.325 18)"></path><path id="Path_8" data-name="Path 8" d="M0,18.847v-1.3H.949c1.128,0,2.193-.293,2.193-1.923V3.4A2.33,2.33,0,0,0,.657,1.294H.1V0H9.516L19.891,11.135h.093V2.816c0-1.027-.881-1.521-2.5-1.521 H16.5V0h8.054V1.294h-.8c-1.654,0-2.358.767-2.358,1.438V18.847H18.711L4.607,3.67H4.54v12.1c0,1.525.8,1.784,2.847,1.784H8.02v1.3Z" transform="translate(755.444 18.396)"></path></g></svg></a>
              
            </div>
            <div className="col-6 hlp-text-right">
              <a>Suscribite</a>
            </div>
          </div>
        </div>
      </header>
      <nav className="com-nav-mobile">
        <div className="row">
          <a class="com-link col-3 item-foo nacion-home" href="https://www.lanacion.com.ar/" target="_top"><i class="com-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M19 21H5.00002C4.44774 21 4.00002 20.5523 4.00002 20V11H3.58667C2.67263 11 2.23766 9.87489 2.914 9.26005L11.327 1.612C11.7085 1.26485  12.2915 1.26485 12.673 1.612L21.086 9.26005C21.7624 9.87489 21.3274 11 20.4134 11H20V20C20 20.5523 19 21 19 21ZM13 19H18V9.157L12 3.703 L6.00002 9.157V19H11V14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14V19Z" fill="#272727"></path></svg></i><p>Home</p></a>
          <a class="com-link col-3 item-foo" href="https://club.lanacion.com.ar/"><i class="com-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 16H4V19H20V16ZM20 5H4V14H20V5ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772  2.44772 3 3 3ZM13.0562 7.08847C12.3103 7.85408 12.0606 8.98058 12.396 9.99145L12.4924 10.2435C12.4973 10.2545 12.5036 10.2683 12.513 10.289 L12.572 10.3926C12.7991 10.7264 13.2373 10.8458 13.6032 10.6679C13.9596 10.4947 14.1377 10.0928 14.0343 9.71498L13.9986 9.61351L13.9677 9.54268 C13.8012 9.13677 13.8732 8.65118 14.1579 8.30504C14.4366 7.96619 14.8711 7.81882 15.2849 7.919C15.6611 8.01009 15.9672 8.29309 16.1005 8.66922 L16.1385 8.79791C16.2302 9.16833 16.5561 9.42772 16.9354 9.42636C17.1871 9.42588 17.4243 9.30811 17.5781 9.10957C17.7277 8.91631 17.783 8.66669  17.7301 8.42903C17.6973 8.28073 17.6505 8.13331 17.5912 7.98873C17.2339 7.11879 16.475 6.48567 15.5647 6.30321C14.6514 6.12016 13.7101 6.41579  13.0562 7.08847Z" fill="#272727"></path></svg></i><p>Club LN</p></a>
          <a class="com-link col-3 item-foo" href="https://myaccount.lanacion.com.ar/mi-usuario/"><i class="com-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24"><path xmlns="http://www.w3.org/2000/svg" d="M5 22C4.44772 22 3.99355 21.5505 4.06239 21.0026C4.28276 19.2486 5.0799 17.6064 6.34315 16.3431C7.84344 14.8429 9.87827 14 12 14C14.1217 14  16.1566 14.8429 17.6569 16.3431C18.9201 17.6064 19.7172 19.2486 19.9376 21.0026C20.0065 21.5505 19.5523 22 19 22C18.4477 22 18.0085 21.5492  17.9169 21.0046C17.7113 19.7825 17.1304 18.6452 16.2426 17.7574C15.1174 16.6321 13.5913 16 12 16C10.4087 16 8.88258 16.6321 7.75736 17.7574 C6.86956 18.6452 6.28871 19.7825 6.08312 21.0046C5.9915 21.5492 5.55228 22 5 22ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18  3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="#272727"></path></svg></i><p>Mi Cuenta</p></a>
          <a class="com-link col-3 item-foo"><i class="com-icon "><svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H4C3.44772 6 3 5.55228 3 5ZM3 12C3 11.4477 3.44772 11 4  11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 19C3 18.4477 3.44772 18 4 18H20C20.5523 18 21  18.4477 21 19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19Z" fill="#272727"></path></svg></i><p>Menú</p></a>
          
          {/* <button className="col-2 item-foo">
            <i className="icon-menu"></i>
            <p>Menú</p>
          </button> */}
        </div>
      </nav>
    </>
// <!--Fin de Header de mobile (logica react)-->
  );
};
