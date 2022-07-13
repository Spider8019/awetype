import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect, useRef } from "react"
import strings from '../public/strings'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import DoneIcon from '@mui/icons-material/Done';
import Graph from '../components/graph';
import Tooltip from '@mui/material/Tooltip';
import { MobileView, BrowserView } from "react-device-detect"

export default function Home() {

  const [givenString, setGivenString] = useState("hinduism is an indian")
  const whatYouHaveTyped = useRef([])
  const [length, setLength] = useState(-1)
  const [testFinished, setTestFinished] = useState(false)
  const [theme, setTheme] = useState("gita")
  const [info, setInfo] = useState({ capslock: false })

  const str = useRef(null)


  const capsLockDetect = (event) => {
    if (event.getModifierState("CapsLock"))
      return true;
    else false
  }

  useEffect(() => {

    setGivenString(strings.filter(item => item.type === theme)[0].data[Math.floor(Math.random() * (strings.filter(item => item.type === theme)[0].data.length))].toLowerCase().replace(/[^a-zA-Z ]/g, "").slice(0, 100))
  }, [])
  useEffect(() => {

    function onScroll(event) {
      if (length === givenString.length - 1) {
        setTestFinished(true)
      }
      else if (event.key.toLowerCase() === 'm' && event.ctrlKey) {
        changeString()
        finishTest(false)
      }
      else if (event.key.toLowerCase() === 'c' && event.ctrlKey && length !== -1) {
        finishTest()
      }
      else if (event.which == 8 && length !== -1) {
        if (givenString[length] === " ") {
          const audio = new Audio("http://freesoundeffect.net/sites/default/files/printerbeep-403-sound-effect-20834351.mp3")
          audio.play()
          return
        }
        str.current.children.item(length).style.color = "gray"
        str.current.children.item(length).style.textDecoration = "none";
        let temp = --length
        setLength(temp)
      }
      else if (event.which === 20) {
        setInfo({ ...info, capslock: capsLockDetect(event) })
      }
      else if (event.key.match(/[a-zA-Z\s]/) && !event.shiftKey && !event.ctrlKey && !event.altKey) {
        setLength(++length);
        console.log(length)
        whatYouHaveTyped.current.push({ timestamp: Date.now(), keypressed: event.key, correct: givenString[length] })

        if (!testFinished) {
          const target = str.current.children.item(length);
          if (givenString[length] === event.key) {
            target.style.color = "white";
          }
          else {
            target.style.color = "var(--base-color)";
            target.style.textDecoration = "underline";
          }

        }
      }

    }
    window.addEventListener('keydown', onScroll)

    return () => {
      window.removeEventListener('keydown', onScroll);
    };
  }, [givenString])

  const findWpm = (arr) => {
    let count = 0, skip = 0, i = 0;

    while (i < arr.length) {
      skip = 0;
      if (arr[i].keypressed !== arr[i].correct) {
        count++;
        for (let j = i + 1; j < arr.length - 1; j++) {
          skip++;
          if (arr[j].correct === " " || j === length - 1) {
            break;
          }
        }
      }

      i += skip == 0 ? 1 : skip

    }
    return Math.floor(((givenString.match(/\ \b/g).length + 1 - count) / ((arr[arr.length - 1].timestamp - arr[0].timestamp) / 1000)) * 60)
  }

  const changeString = () => {
    setGivenString(strings.filter(item => item.type === theme)[0].data[Math.floor(Math.random() * (strings.filter(item => item.type === theme)[0].data.length))].split(" ").slice(0, 30).join(" ").toLowerCase().replace(/[^a-zA-Z ]/g, ""))
    setLength(-1);
    setTestFinished(false)
    whatYouHaveTyped.current = []
    if (str.current) {
      for (var i = 0; i < str.current.children.length; i++) {
        str.current.children.item(i).style.color = "gray"
        str.current.children.item(i).style.textDecoration = "none"
      }
    }
  }

  const finishTest = (status = true) => {
    setTestFinished(status)
  }

  return (
    <>

      <BrowserView>

        <div className={styles.container}>
          <Head>
            <title>awetype</title>
            <meta name="description" content="Generated by spider8019" />
            <link rel="icon" href="/favicon.png" />
          </Head>
          <div className={styles.navbarContainer}>
            <p><span style={{ color: "#f3cb04" }}>a</span>
              <span style={{ color: "#27a653" }}>w</span>
              <span style={{ color: "#37abf2" }}>e</span>
              <span style={{ color: "#f17798" }}>t</span>
              <span style={{ color: "#f25849" }}>y</span>
              <span style={{ color: "#f3cb04" }}>p</span>
              <span style={{ color: "#27a653" }}>e</span>
            </p>
            <select onChange={(e) => { setTheme(e.target.value); changeString() }}>
              <option value="gita">gita</option>
              <option value="defense">defense</option>
              <option value="religion">religion</option>
            </select>
          </div>
          <div className={styles.signature}>
            <p>spider8019</p>
          </div>

          <div className={styles.additionalInfo}>
            <Tooltip placement="right-start" title={`Capslock is ${info.capslock ? 'On' : "Off"}`}>
              <div className={`${styles.bulb} ${info.capslock ? styles.on : null}`}></div>
            </Tooltip>
          </div>
          {testFinished ?
            <div className={styles.resultContainer}>
              <div>
                <h1>Results</h1>
                <p><span style={{ width: "100px", display: "inline-block" }}>raw</span>  <span className={styles.span}>{Math.floor(((whatYouHaveTyped.current.filter(item => { return item.correct === " " }).length + 1) / ((whatYouHaveTyped.current[whatYouHaveTyped.current.length - 1].timestamp - whatYouHaveTyped.current[0].timestamp) / 1000)) * 60)}</span></p>
                <p style={{ color: "var(--base-color)" }}><span style={{ width: "100px", display: "inline-block" }}>wpm</span>  <span className={styles.span}>{findWpm(whatYouHaveTyped.current)}</span></p>
                <p><span style={{ width: "100px", display: "inline-block" }}>accuracy</span>  <span className={styles.span}>{((findWpm(whatYouHaveTyped.current) / (Math.floor(((whatYouHaveTyped.current.filter(item => { return item.correct === " " }).length + 1) / ((whatYouHaveTyped.current[whatYouHaveTyped.current.length - 1].timestamp - whatYouHaveTyped.current[0].timestamp) / 1000)) * 60))) * 100).toFixed(0)}%</span></p>

              </div>
              <div>
                <Graph data={whatYouHaveTyped.current} />
              </div>
            </div>
            :
            <div className={styles.containerMain}>
              <p ref={str} id={styles.spansParent}>
                {givenString.split("").map((item, index) => {
                  return (<span id={"span" + (index + 2)} className={index === length + 1 ? styles.blinker : null} key={index}>{item}</span>)
                })
                }
              </p>
            </div>
          }
          <div className={styles.flexView}>
            <Tooltip title="Move (Ctrl + M)">
              <p className={styles.controlbutton} onClick={changeString}><RestartAltIcon className={styles.icon} /> </p>
            </Tooltip>
            {/* {(!testFinished && length != -1) && <Tooltip title="Close (Ctrl + C)">
                    <p className={styles.controlbutton} onClick={finishTest}><DoneIcon className={styles.icon} /> </p>
                  </Tooltip>} */}
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div style={{textAlign:"Center"}}>
          <p><span style={{ color: "#f3cb04" }}>a</span>
            <span style={{ color: "#27a653" }}>w</span>
            <span style={{ color: "#37abf2" }}>e</span>
            <span style={{ color: "#f17798" }}>t</span>
            <span style={{ color: "#f25849" }}>y</span>
            <span style={{ color: "#f3cb04" }}>p</span>
            <span style={{ color: "#27a653" }}>e</span>
          </p>
          <p>Use laptop or computer</p>
          <div className={styles.signature}>
            <p>spider8019</p>
          </div>
        </div>
      </MobileView>
    </>

  )
}
