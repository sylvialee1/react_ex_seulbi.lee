function Sample(){
    return(
           <>
              <SkipComponent/>
              <Header/>
              <WrapComponent/>
              <Footer/>
           </>
    )
}

// Skip
function SkipComponent() {
    return (
        <>
            <ul className="skip">
                <li><a href="#main">콘텐츠바로가기</a></li>
            </ul>
        </>
    );
}

// Header
function Header() {   
    return (
        <>
           <header>
            <h1><a href="#">VINTAGE HOLLYWOOD</a></h1>
            </header>
        </>
    );
}

// Wrap
function WrapComponent() {
    return (
        <>
                <MainComponent/>
        </>
    );
}

	// main
function MainComponent() {
    return (
        <>
           <div id="menubox">
            <nav id="menu">
                <ul>
                    <li><a href="#">HAIR</a></li>
                    <li><a href="#">EARRINGS</a></li>
                    <li><a href="#">RING</a></li>
                    <li><a href="#">NECKLACE</a></li>
      
                </ul>
            </nav>
            <div className="submenu">
              <div className="box">
                <ul>
                    <li><a href="#">PEARL</a></li>
                    <li><a href="#">BEADS</a></li>
                    <li><a href="#">CHAIN</a></li>
                    <li><a href="#">PENDANT</a></li>
                </ul>
                <ul>
                    <li><a href="#">DROP</a></li>
                    <li><a href="#">RING</a></li>
                    <li><a href="#">EARCUFF</a></li>
                    <li><a href="#">POST</a></li>
                </ul>
                <ul>
                    <li><a href="#">14K GOLD</a></li>
                    <li><a href="#">SILVER</a></li>
                    <li><a href="#">BEADS</a></li>
                </ul>
                <ul>
                    <li><a href="#">BAND</a></li>
                    <li><a href="#">PIN</a></li>
                    <li><a href="#">SCRUNCHIE</a></li>
                    <li><a href="#">STRING</a></li>
                </ul>
              </div> 
            </div>
           </div>

           <section id="banner">
            <div><img src="img/95ef3959f61f244558989bf2b18699f8.jpg" alt="ban" /></div>
            <div><img src="img/b7f6f14360e0b42a7bf468e899a4166c.jpg" alt="ban" /></div>
            <div><img src="img/66bfdd075ed9982dec52d3a08b8fa563.jpg" alt="ban" /></div>
            <div><img src="img/2515dc3785abdc3972734074d64a0440.jpg" alt="ban" /></div>
           </section>

        {/* best */}
         <section id="main"> 
         <h2>NEW EDITION</h2>
                <ul>
                    <li><a href="#"><img src="img/245bc098396bc2a571a3d798b2ab377b.jpg" alt="1" /></a></li>
                    <li><a href="#"><img src="img/89acc009bc82e84ccaa4c8cffc0b7fcc.jpg" alt="1" /></a></li>
                    <li><a href="#"><img src="img/f1a11d45dde0f25d234beb87c26ea9f2.jpg" alt="1" /></a></li>
                    <li><a href="#"><img src="img/fed37703f35f703f87864e278f9694b3.jpg" alt="1" /></a></li>
                    <li><a href="#">more</a></li>
                </ul>



          </section>


         

               {/* 23 holiday collection */}
       <section id="main1">
                <h2>23' HOLIDAY COLLECTION</h2>
                <ul>
                    <li><a href="#"><img src="img/c9e4d52e6f8ef3c596b45f732ec38be2.jpg" alt="1" /></a></li>
                    <li><a href="#"><img src="img/8f95ce7f90c9df95709f0067b457b44d.jpg" alt="1" /></a></li>
                    <li><a href="#"><img src="img/8f92846b04fb996428dd75513272994a.jpg" alt="1" /></a></li>
                    <li><a href="#"><img src="img/8892364a475d786fd2c5aa30aa86ea8e.jpg" alt="1" /></a></li>
                    <li><a href="#">more</a></li>
                </ul>
          </section>


          <section id="main2">

            
          <h2>BEST</h2>
                <ul>
                    <li><a href="#"><img src="img/95ef3959f61f244558989bf2b18699f8.jpg" alt="1" /></a></li>
                    <li><a href="#"><img src="img/5c368398f4239d61422f4e0bfa6d1015.jpg" alt="1" /></a></li>
                    <li><a href="#"><img src="img/b7f6f14360e0b42a7bf468e899a4166c.jpg" alt="1" /></a></li>
                    <li><a href="#"><img src="img/1f0ecf1fd7ef48725b08d4bb86ddc705.jpg" alt="1" /></a></li>
                    <li><a href="#">more</a></li>
                </ul>
               
            </section> 


          <section id="ban1">
                <img src="img/23WINTER_LOOKBOOK_02.jpg" alt="bb" />
          </section>




        </>
    );
}

// Footer
function Footer() {    
    return (
        <>
            
		<footer id="footer">
			<div class="f_menu1">
            <a href="#">OUT STORY</a>
			<a href="#">CONTACT US</a>
	
		</div>

		<div class="f_menu2">
            
			<a href="#">TERMS & CONDITIONS</a>  <a href="#">PRIVACY POLICY</a>  <a href="#">TERMS OF USE</a>
			
	
			</div>

            <div class="f_line"> </div>


			<div class="f_menu3">
								
				<p class="f_number">CUSTOMER CENTER</p>
				<p class="f_number2">1544-6468</p>
				<p class="f_number3">MON - FRI 11:00 - 17:00 [LUNCH BREAK 12:30 - 13:30</p></div>

				<div class="f_number4">
				<p class="f_name">VINTAGE HOLLYWOOD</p>
			<p class="f_bottom">Copyright ©VINTAGE HOLLYWOOD All rights reserved.</p> </div>
		</footer>
  
        </>
    );
}

ReactDOM.render(
    <Sample/>,
    document.getElementById("root")
);