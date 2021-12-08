import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar.js";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Essentially Sports</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />

        <div className={styles.jumbo}>
          <img
            className={styles.jumbotron}
            src="/images/image 14.png"
          />
          <h1 className={styles.jumboText}>Whats your next<br /> destination?</h1>
          <button className={styles.jumboButton}>Explore roles</button>
        </div>
      </header>

      <main className={styles.content}>
        <h2 className={styles.intro}>MEET ESSENTIALLYSPORTS</h2>
        <div className={styles.textOne}>
          <p>
            EssentiallySports is a <strong>multi-sport website</strong> that
            delivers the latest news, articles, features, and updates on UFC,
            NBA, NFL, NASCAR, eSports, Tennis, Formula 1, Boxing, WWE, and Golf.
          </p>
          <p>
            Our in-house team includes a carefully curated pool of writers,
            editors, content strategists, and social media experts. The one
            thing that unites us all is our passion for sports.
          </p>
          <p>
            If you believe you have what it takes to be a part of our ongoing
            journey and are ready to venture into the world of American sports
            by adopting
            <strong>‘The Fan’s Perspective’</strong>, read along to know more!
          </p>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.num}>120M+</div>
            <div className={styles.text}>USERS REACH*</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.num}>50M+</div>
            <div className={styles.text}>WEBSITE CLICKS*</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.num}>100+</div>
            <div className={styles.text}>MEMBERS</div>
            <div className={styles.text}>STRONG ORG.</div>
          </div>
        </div>

        <div className={styles.globe}>
          <img src="images/MapChart_Map 2.png" width="1771" height="896" />
        </div>

        <h2 className={styles.intro}>OUR IDEAL PLAYERS</h2>

        <div className={styles.containerOne}>
          <img src="/images/image 119.png" width="701" height="745" />
          <div className={styles.containerOneFacts}>
            <div className={styles.item1}>
              <h3>Enthusiasm for the Sport</h3>
              <p style={{lineHeight: '1.5'}}>
                Sports is not just our job- we live it. So whether it’s writing
                passionate opinionated articles (unfortunately toned down by the
                editors) or discussing sports at all hours of the day, we do it
                all.
              </p>
            </div>
            <div className={styles.item2}>
              <div className={styles.itemtop}>
                <h3>Committed and Goal-Oriented</h3>
                <p>
                  We aspire to touch new heights in our journey of being the
                  best sports media house, hence we seek long-term candidates
                  who are willing to envision the future with us.
                </p>
              </div>
              <div className={styles.itemtop}>
                <h3>A Keenness to Learn</h3>
                <p>
                  If you have the passion, we have the position. As long as you
                  are willing to learn, including a whole new sport altogether,
                  we’ll ensure you are creatively satisfied.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.containerTwo}>
          <img src="/images/image120.png" width="869" height="643" />
          <div className={styles.containerTwoFacts}>
            <div className={styles.item3}>
              <h3>Diligence and Flexibility</h3>
              <p>
                We dearly prize event-day coverage and is something our
                organization thrives on.
              </p>
              <br />
              <p>
                Additionally, we admire those that adapt to different content
                forms and maintain quality and efficiency at all times.
              </p>
            </div>
            <div className={styles.item4}>
              <div className={styles.itemBottom}>
                <h3>A Sense of Ownership, Integrity, and Humility</h3>
                <p>
                  The core values of our company, something every member holds
                  in the highest regard.
                </p>
              </div>
              <div className={styles.itemBottom}>
                <h3>Team Player</h3>
                <p>
                  Collaborating with fellow colleagues to achieve targets is
                  what makes us tick. Because after all, teamwork makes the
                  dream work!
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className={styles.intro}>WHAT WE OFFER</h2>

        <div className={styles.whatWeOffer}>

          <div className={styles.circleContainer}>
            
            <div className={styles.perks}>
            <div className={styles.circle}>
              <img src="/images/image 112.png" />
            </div>
            <p>Work from Home</p>
            </div>

            <div className={styles.perks}>
            <div className={styles.circle}>
              <img src="/images/image 113.png" />
            </div>
            <p>Paid Time Off</p>
            </div>
            
            <div className={styles.perks}>
            <div className={styles.circle}>
              <img src="/images/vector_growth-removebg-preview 2.png" />
            </div>
            <p>Opertunities For Growth</p>
            </div>
            
            <div className={styles.perks}>
            <div className={styles.circle}>
              <img src="/images/image 114.png" />
            </div>
            <p>Learning Initiatives</p>
            </div>

           <div className={styles.perks}> 
            <div className={styles.circle}>
              <img src="/images/image 115.png" />
            </div>
            <p>Open Door Policy</p>
            </div>

            <div className={styles.perks}>
            <div className={styles.circle}>
              <img src="/images/vector_sports-removebg-preview 2.png" />
            </div>
            <p>Like-Minded Sports Fans&apos; Culture</p>
            </div>
            
            <div className={styles.perks}>
            <div className={styles.circle}>
              <img
                style={{ height: "100px", width: "auto" }}
                src="/images/image 116.png"
              />
            </div>
            <p>Chance to Delve into the World of American Sports</p>
            </div>
            
           <div className={styles.perks}>
            <div className={styles.circle}>
              <img src="/images/vector_training-removebg-preview 2.png" />
            </div>
            <p>Exposure to Training and Workshops</p>
            </div>
            
            <div className={styles.perks}>
            <div className={styles.circle}>
              <img src="/images/vector_working_hours-removebg-preview 2.png" />
            </div>
            <p>Flexible Working Hours</p>
            </div>
            
            <div className={styles.perks}>
            <div className={styles.circle}>
              <img src="/images/vector_interview-removebg-preview 2.png" />
            </div>
            <p>Opertunities to Interview Athletes</p>
            </div>
          </div>
        </div>

        <h2 className={styles.intro}>TEAM TESTIMONIALS</h2>
        <div className={styles.testimonials}>
          <p>
            Our diverse mix of people across cultures is our biggest strength
            and a source of immense pride. Work here is creatively satisfying,
            growth is guaranteed, and people are always eager to help.
          </p>
          <p>
            Do you wonder what it’s like working at EssentiallySports? Look no
            further, as some of our superstars share their experiences about
            their time here so far.
          </p>
        </div>

        <div style={{ position: "relative" }}>
          <img
            style={{ width: "100%", height: "600px", zIndex: -1, objectFit:'cover' }}
            src="/images/image 117.png"
          />
          <img
            style={{
              position: "absolute",
              top: "75%",
              left: "30%",
              maxWidth: "50%",
              height: "auto",
            }}
            src="/images/call button.png"
          />
          <div
            style={{
              position: "absolute",
              background: "#f95750",
              color: "white",
              top: "58%",
              right: "0%",
              fontSize: "26px",
              padding: "2%",
              borderRadius: "10px",
            }}
          >
           <b>Aditya</b>, <i>Design</i>
          </div>
        </div>

        <div>
          <h2 className={styles.intro}>POSITIONS @EssentiallySports</h2>
          <div style={{ marginBottom: "100px" }}>
            <div className={styles.postContainer}>
              <div className={styles.postBlock}>Backend Developer</div>
              <div className={styles.postBlock}>Graphic Designer</div>
            </div>
            <div className={styles.postContainer}>
              <div className={styles.postBlock}>Content Writer</div>
              <div className={styles.postBlock}>Editor</div>
              <div className={styles.postBlock}>Video Editor</div>
            </div>
          </div>

          <img
            src="/images/frame 687.png"
            width="300"
            height="auto"
            style={{
              display: "block",
              marginLeft: "47%",
              marginRight: "auto",
              width: "20%",
            }}
          />
        </div>

        <div>
          <img
            src="/images/join us.png"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "6rem",
              marginTop: "60px",
            }}
          />
          <div className={styles.joinUsText}>
            <p>
              Excited to work with us?
              <br />
              We would love to have you on board!
            </p>
            <br />
          </div>

          <p
            style={{
              textAlign: "center",
              margin: "60px",
              fontSize: "26px",
              fontWeight: "bold",
            }}
          >
            &lt; insert typeform&gt;
          </p>
        </div>
      </main>

      <section className={styles.contactSection}>
      <img src="/images/image 1.png" width="230" height="42" />
      
      <div className={styles.contactLinks}>
      <a target="_blank" rel="noreferrer" href="https://www.facebook.com/essentiallysports/">
      <img  src="images/facebook logo 1.png" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/es_sportsnews?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"> 
      <img src="/images/twitter.png" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/essentially-sports/?originalSubdomain=in">
      <img src="/images/linked.png" />
      </a>
      <a href="mailto:hr@essentiallysports.com">
      <img src="/images/mail.png" />
      </a>
      </div>

      <div className={styles.details}>
      <Link href="./posts/">About Us</Link>
      <span className={styles.bullet}> &bull; </span> 
      <a href="#">Authors</a>
      <span className={styles.bullet}> &bull; </span>
      <a href="#">Privacy Policy</a>
      <span className={styles.bullet}> &bull; </span> 
      <a href="#">Cookies Policy</a>
      <span className={styles.bullet}> &bull; </span> 
      <a href="#">GDPR compliance</a>
      <span className={styles.bullet}> &bull; </span> 
      <a href="#">Terms of Use</a>
      <span className={styles.bullet}> &bull; </span> 
      <a href="#">Editorial Guidelines</a>
      <span className={styles.bullet}> &bull; </span> 
      <a href="#">Web Stories Sitemap</a>
      </div>
      </section>
     
      <hr style={{
        width: '95%',
        margin: 'auto',
        padding: 'auto'

      }} />
      
      <footer className={styles.footer}>
       <p>Full Spectrum Services LLP &copy; 2021 | All Rights Reserved</p>
      </footer>
    </div>
  );
}
