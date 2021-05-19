import React from "react";
import PhotoDisplay from './photoDisplay'

const Header = (props) => {
  return (
    <div>
      <h1 className='header-h1'>LETS PLAY JEOPARDY</h1>
      <PhotoDisplay jImage={'https://cdn.dribbble.com/users/314252/screenshots/14898537/media/32cb039ec066de2b9923d8dcaa5a8be5.jpg?compress=1&resize=1600x1200'}/>
    </div>
  );
};

export default Header;
