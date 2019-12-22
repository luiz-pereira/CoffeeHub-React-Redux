import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

	const availableLinks = () => {
		if (props.logged){
			return (
				<>
					
					<NavLinks style={linkAnimation}>
						<a href="/coffees">See coffees</a>
						<a href="/user/profile/saved_coffees">Saved coffees</a>
						<a href="/user/profile/details">User Details</a>
						<a href="/user/profile/tastings">Tastings</a>
						<a id="button-navbar-logout" onClick={() => props.handleLogout()}><small>Log Out</small></a>
					</NavLinks>
				</>
			)
		} else {
			return (<NavLinks style={linkAnimation}>
				<a href="/coffees">See coffees</a>
				<a href="/signup">Sign Up</a>
				<a href="/signin">Sign In</a>
			</NavLinks>)
		}
	}

	
	


  return (
    <>
      <NavBar id="navbar" style={barAnimation}>
        <FlexContainer>
          <Brand />
          {availableLinks()}
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState} 
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu 
        navbarState={props.navbarState} 
        handleNavbar={props.handleNavbar}
      />
   </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  
  width: 100%;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 1;
  font-size: 1rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 3rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: white;
		text-transform: uppercase;
		font-family: 'Quicksand', sans-serif
		font-weight: 1000;
		font-size: 2em;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
			border-bottom: 1px solid #fdcb6e;
			text-decoration: none;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const H1 = styled(animated.ul)`
  
  list-style-type: none;
	color: white;
	font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  font-weight: 800;
  transition: all 300ms linear 0s;
	font-size: 2em;
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;