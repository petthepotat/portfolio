import Head from 'next/head'

import styles from "../styles/Home.module.css"



export default function Home() {
  return (
    <>
      <Head>
        <title>petthepotat - Home</title>
        <meta name="description" content="Generated by create next app" />        
      </Head>

    <div className={styles.Body}>

      {/* nav */}
      <nav className={styles.NavContainer}>
        <div className={styles.NavBarBackground}></div>
        <div className={styles.NavBar}>
          <a href="#" className={styles.NavBarIcon}>
            <img src='favicon.ico' className={styles.NavBarLogo}></img>
            <div className={`${styles.NavBarText} ${styles.NavBarLogoText}`}>petthepotat</div>
          </a>
          <span></span>
          <div className={styles.NavBarButton}><a href="#">Home</a></div>
          <div className={styles.NavBarButton}><a href="#">About</a></div>
          <div className={styles.NavBarButton}><a href="#">Projects</a></div>
          <div className={styles.NavBarButton}><a href="#">Contact</a></div>
        </div>
      </nav>

      <main style={{position: `absolute`, width: `100%`, left: `0px`, zIndex: 1, background: `black`}}>

        {/* hero */}
        <div className={styles.Hero}>
          <div className={`${styles.HeroBackContainer}}`}>
            <img src='banner.png' className={styles.HeroBackground}/>
          </div>

          <div className={styles.HeroSpacing}></div>

          <div className={styles.HeroText}>
            <div className={styles.HeroTitle}>petthepotat</div>
            <div className={styles.HeroSubtitle}>I'm a software developer</div>
          </div>
        </div>

        {/* github */}
        <div className={styles.Github}>
          <div className={styles.GithubTitle}>
            Github
            <div className={styles.HeroIcon}>
              <img alt="get github icon" src='https://cdn-icons-png.flaticon.com/512/3291/3291695.png' className={styles.HeroIconImage}></img>
            </div>
          </div>
          <div className={styles.GithubSubtitle}>Here are some projects!</div>
          <div className={styles.GithubContentContainer}>
            <div className={styles.ContentCard}>
              <img src='git-portfolio.jpg'></img>
              <h1>portfolio</h1>
              <h2>this website!</h2>
            </div>
            <div className={styles.ContentCard}>
              <img src='git-glfw-engine.png'></img>
              <h1>OpenGL & C++</h1>
              <h2>opengl rendering with c++</h2>
            </div>
            <div className={styles.ContentCard}>
              <img src='git-rpg-prototype.png'></img>
              <h1>RPG Prototype</h1>
              <h2>i like rpg games</h2>
            </div>
          </div>
        </div>

        {/* side by side container */}
        <div className={styles.Side2ContentContainer}>
          {/* random spotify blob */}
          <div className={styles.Side2ContentSection}>
            <div className={styles.Spotify}>
              <div className={styles.SpotifyTitle}>Spotify</div>
              <div className={styles.SpotifySubtitle}>Here's what I'm listening to!</div>
              <iframe  src="https://open.spotify.com/embed/playlist/1UAQ7WYIxbptNETMqbemLQ?utm_source=generator" 
                    className={styles.SpotifyFrame} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>

          {/* kofi */}
          <div className={styles.Kofi}>
            <div className={styles.KofiTitle}>Kofi</div>
            <div className={styles.KofiSubtitle}>Here's my kofi!</div>
            <iframe id='kofiframe' src='https://ko-fi.com/petthepotat/?hidefeed=true&widget=true&embed=true&preview=true' 
                className={styles.KofiFrame} title='petthepotat'></iframe>
          </div>
        </div>

        {/* About me */}
        <div className={styles.About}>
          <div className={styles.AboutTitle}>About Me</div>
          <div className={styles.AboutSubtitle}>Here's some stuff about me!</div>
        </div>

        {/* Contact */}
        <div className={styles.Contact}>
          <div className={styles.ContactTitle}>Contact</div>
          <div className={styles.ContactSubtitle}>Here's how to contact me!</div>

          <div className={styles.ContactContainer}>
            <div className={styles.ContactEmailSender}>
              <div className={styles.ContactEmailSenderTitle}>Email</div>
              <div className={styles.ContactEmailSenderSubtitle}>Send me an email!</div>
              <div className={styles.ContactEmailSenderInputContainer}>
                <input className={styles.ContactEmailSenderInput} placeholder="Email"></input>
                <input className={styles.ContactEmailSenderInput} placeholder="Subject"></input>
                <textarea className={styles.ContactEmailSenderInput} placeholder="Message"></textarea>
                <button className={styles.ContactEmailSenderButton}>Send</button>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
    </>
  )
}
