import styles from "./CodeMonitorIcon.module.css";

const pickSize = (size) => { switch(size) {
  case "1x": return "1em";
  case "2x": return "2em";
  case "3x": return "3em";
  case "4x": return "4em";
  case "5x": return "5em";
  case "6x": return "6em";
  case "7x": return "7em";
  case "8x": return "8em";
  case "9x": return "9em";
  case "10x": return "10em";
  default: return "1em";
}};

export const CodeMonitorIcon = ({ size="1x", className:propClassName, ...props }) => {
  return (
    <div className={[styles.iconWrapper, propClassName].join(" ")} style={{fontSize: pickSize(size), ...props.style}} {...props}>
      <svg className={styles.icon} viewBox="0 0 115 115" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="screen-clip">
            <path d="
              M 24.1912 13.8415
              C 46.3454 11.8148 68.6384 11.8148 90.7926 13.8415
              C 93.3662 14.1147 95.7741 15.2420 97.6322 17.0435
              C 99.4902 18.8450 100.691 21.2169 101.044 23.7808
              C 103.199 38.6393 103.199 53.7311 101.044 68.5897
              C 100.691 71.1536 99.4902 73.5255 97.6322 75.3270
              C 95.7741 77.1285 93.3662 78.2558 90.7926 78.5290
              C 68.6384 80.5557 46.3454 80.5557 24.1912 78.5290
              C 21.6177 78.2558 19.2097 77.1285 17.3517 75.3270
              C 15.4936 73.5255 14.2924 71.1536 13.9398 68.5897
              C 11.7845 53.7311 11.7845 38.6393 13.9398 23.7808
              C 14.2924 21.2169 15.4936 18.8450 17.3517 17.0435
              C 19.2097 15.2420 21.6177 14.1147 24.1912 13.8415
              Z "
            />
          </clipPath>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path className={styles.monitorScreen} d="
          M 24.1912 13.8415
          C 46.3454 11.8148 68.6384 11.8148 90.7926 13.8415
          C 93.3662 14.1147 95.7741 15.2420 97.6322 17.0435
          C 99.4902 18.8450 100.691 21.2169 101.044 23.7808
          C 103.199 38.6393 103.199 53.7311 101.044 68.5897
          C 100.691 71.1536 99.4902 73.5255 97.6322 75.3270
          C 95.7741 77.1285 93.3662 78.2558 90.7926 78.5290
          C 68.6384 80.5557 46.3454 80.5557 24.1912 78.5290
          C 21.6177 78.2558 19.2097 77.1285 17.3517 75.3270
          C 15.4936 73.5255 14.2924 71.1536 13.9398 68.5897
          C 11.7845 53.7311 11.7845 38.6393 13.9398 23.7808
          C 14.2924 21.2169 15.4936 18.8450 17.3517 17.0435
          C 19.2097 15.2420 21.6177 14.1147 24.1912 13.8415
          Z " />
        <g className={styles.matrixText} clipPath="url(#screen-clip)">
          <text className={[styles.rainColumn, styles.c4].join(" ")} x="16.4375" y="13">
            <tspan x="16.4375" dy="0"
            >1</tspan><tspan x="16.4375" dy="1.2em"
            >0</tspan><tspan x="16.4375" dy="1.2em"
            >1</tspan><tspan x="16.4375" dy="1.2em"
            >1</tspan><tspan x="16.4375" dy="1.2em"
            >1</tspan><tspan x="16.4375" dy="1.2em"
            >1</tspan><tspan x="16.4375" dy="1.2em"
            >0</tspan><tspan x="16.4375" dy="1.2em"
            >0</tspan><tspan x="16.4375" dy="1.2em"
            >1</tspan><tspan x="16.4375" dy="1.2em"
            >1</tspan><tspan x="16.4375" dy="1.2em"
            >1</tspan><tspan x="16.4375" dy="1.2em"
            >1</tspan><tspan x="16.4375" dy="1.2em"
            >0</tspan><tspan x="16.4375" dy="1.2em"
            >0</tspan><tspan x="16.4375" dy="1.2em"
            >1</tspan><tspan x="16.4375" dy="1.2em"
            >1</tspan><tspan x="16.4375" dy="1.2em"
            >1</tspan><tspan x="16.4375" dy="1.2em"
            >1</tspan><tspan x="16.4375" dy="1.2em"
            >0</tspan><tspan x="16.4375" dy="1.2em"
            >1</tspan><tspan x="16.4375" dy="1.2em"
            >1</tspan><tspan x="16.4375" dy="1.2em"
            >0</tspan><tspan x="16.4375" dy="1.2em"
            >0</tspan><tspan x="16.4375" dy="1.2em"
            >1</tspan><tspan x="16.4375" dy="1.2em"
            >0</tspan>
          </text>
          <text className={[styles.rainColumn, styles.c1].join(" ")} x="24.4375" y="13">
            <tspan x="24.4375" dy="0"
            >1</tspan><tspan x="24.4375" dy="1.2em"
            >0</tspan><tspan x="24.4375" dy="1.2em"
            >1</tspan><tspan x="24.4375" dy="1.2em"
            >1</tspan><tspan x="24.4375" dy="1.2em"
            >1</tspan><tspan x="24.4375" dy="1.2em"
            >1</tspan><tspan x="24.4375" dy="1.2em"
            >0</tspan><tspan x="24.4375" dy="1.2em"
            >0</tspan><tspan x="24.4375" dy="1.2em"
            >1</tspan><tspan x="24.4375" dy="1.2em"
            >1</tspan><tspan x="24.4375" dy="1.2em"
            >1</tspan><tspan x="24.4375" dy="1.2em"
            >1</tspan><tspan x="24.4375" dy="1.2em"
            >0</tspan><tspan x="24.4375" dy="1.2em"
            >0</tspan><tspan x="24.4375" dy="1.2em"
            >1</tspan><tspan x="24.4375" dy="1.2em"
            >1</tspan><tspan x="24.4375" dy="1.2em"
            >1</tspan><tspan x="24.4375" dy="1.2em"
            >1</tspan><tspan x="24.4375" dy="1.2em"
            >0</tspan><tspan x="24.4375" dy="1.2em"
            >1</tspan><tspan x="24.4375" dy="1.2em"
            >1</tspan><tspan x="24.4375" dy="1.2em"
            >0</tspan><tspan x="24.4375" dy="1.2em"
            >0</tspan><tspan x="24.4375" dy="1.2em"
            >1</tspan><tspan x="24.4375" dy="1.2em"
            >0</tspan>
          </text>
          <text className={[styles.rainColumn, styles.c3].join(" ")} x="30.1875" y="13">
            <tspan x="30.1875" dy="0"
            >0</tspan><tspan x="30.1875" dy="1.2em"
            >1</tspan><tspan x="30.1875" dy="1.2em"
            >0</tspan><tspan x="30.1875" dy="1.2em"
            >0</tspan><tspan x="30.1875" dy="1.2em"
            >0</tspan><tspan x="30.1875" dy="1.2em"
            >0</tspan><tspan x="30.1875" dy="1.2em"
            >1</tspan><tspan x="30.1875" dy="1.2em"
            >1</tspan><tspan x="30.1875" dy="1.2em"
            >0</tspan><tspan x="30.1875" dy="1.2em"
            >0</tspan><tspan x="30.1875" dy="1.2em"
            >0</tspan><tspan x="30.1875" dy="1.2em"
            >0</tspan><tspan x="30.1875" dy="1.2em"
            >1</tspan><tspan x="30.1875" dy="1.2em"
            >1</tspan><tspan x="30.1875" dy="1.2em"
            >0</tspan><tspan x="30.1875" dy="1.2em"
            >0</tspan><tspan x="30.1875" dy="1.2em"
            >0</tspan><tspan x="30.1875" dy="1.2em"
            >0</tspan><tspan x="30.1875" dy="1.2em"
            >1</tspan><tspan x="30.1875" dy="1.2em"
            >0</tspan><tspan x="30.1875" dy="1.2em"
            >0</tspan><tspan x="30.1875" dy="1.2em"
            >1</tspan><tspan x="30.1875" dy="1.2em"
            >1</tspan><tspan x="30.1875" dy="1.2em"
            >0</tspan><tspan x="30.1875" dy="1.2em"
            >1</tspan>
          </text>
          <text className={[styles.rainColumn, styles.c2].join(" ")} x="35.9375" y="13">
            <tspan x="35.9375" dy="0"
            >1</tspan><tspan x="35.9375" dy="1.2em"
            >1</tspan><tspan x="35.9375" dy="1.2em"
            >1</tspan><tspan x="35.9375" dy="1.2em"
            >1</tspan><tspan x="35.9375" dy="1.2em"
            >0</tspan><tspan x="35.9375" dy="1.2em"
            >0</tspan><tspan x="35.9375" dy="1.2em"
            >1</tspan><tspan x="35.9375" dy="1.2em"
            >1</tspan><tspan x="35.9375" dy="1.2em"
            >1</tspan><tspan x="35.9375" dy="1.2em"
            >1</tspan><tspan x="35.9375" dy="1.2em"
            >0</tspan><tspan x="35.9375" dy="1.2em"
            >0</tspan><tspan x="35.9375" dy="1.2em"
            >1</tspan><tspan x="35.9375" dy="1.2em"
            >1</tspan><tspan x="35.9375" dy="1.2em"
            >1</tspan><tspan x="35.9375" dy="1.2em"
            >1</tspan><tspan x="35.9375" dy="1.2em"
            >0</tspan><tspan x="35.9375" dy="1.2em"
            >0</tspan><tspan x="35.9375" dy="1.2em"
            >1</tspan><tspan x="35.9375" dy="1.2em"
            >0</tspan><tspan x="35.9375" dy="1.2em"
            >1</tspan><tspan x="35.9375" dy="1.2em"
            >0</tspan><tspan x="35.9375" dy="1.2em"
            >0</tspan><tspan x="35.9375" dy="1.2em"
            >0</tspan><tspan x="35.9375" dy="1.2em"
            >1</tspan>
          </text>
          <text className={[styles.rainColumn, styles.c4].join(" ")} x="41.6875" y="13">
            <tspan x="41.6875" dy="0"
            >0</tspan><tspan x="41.6875" dy="1.2em"
            >0</tspan><tspan x="41.6875" dy="1.2em"
            >0</tspan><tspan x="41.6875" dy="1.2em"
            >1</tspan><tspan x="41.6875" dy="1.2em"
            >1</tspan><tspan x="41.6875" dy="1.2em"
            >1</tspan><tspan x="41.6875" dy="1.2em"
            >0</tspan><tspan x="41.6875" dy="1.2em"
            >0</tspan><tspan x="41.6875" dy="1.2em"
            >0</tspan><tspan x="41.6875" dy="1.2em"
            >1</tspan><tspan x="41.6875" dy="1.2em"
            >1</tspan><tspan x="41.6875" dy="1.2em"
            >1</tspan><tspan x="41.6875" dy="1.2em"
            >0</tspan><tspan x="41.6875" dy="1.2em"
            >0</tspan><tspan x="41.6875" dy="1.2em"
            >0</tspan><tspan x="41.6875" dy="1.2em"
            >1</tspan><tspan x="41.6875" dy="1.2em"
            >1</tspan><tspan x="41.6875" dy="1.2em"
            >1</tspan><tspan x="41.6875" dy="1.2em"
            >0</tspan><tspan x="41.6875" dy="1.2em"
            >1</tspan><tspan x="41.6875" dy="1.2em"
            >1</tspan><tspan x="41.6875" dy="1.2em"
            >0</tspan><tspan x="41.6875" dy="1.2em"
            >0</tspan><tspan x="41.6875" dy="1.2em"
            >1</tspan><tspan x="41.6875" dy="1.2em"
            >1</tspan>
          </text>
          <text className={[styles.rainColumn, styles.c6].join(" ")} x="47.4375" y="13">
            <tspan x="47.4375" dy="0"
            >1</tspan><tspan x="47.4375" dy="1.2em"
            >0</tspan><tspan x="47.4375" dy="1.2em"
            >1</tspan><tspan x="47.4375" dy="1.2em"
            >0</tspan><tspan x="47.4375" dy="1.2em"
            >1</tspan><tspan x="47.4375" dy="1.2em"
            >1</tspan><tspan x="47.4375" dy="1.2em"
            >0</tspan><tspan x="47.4375" dy="1.2em"
            >0</tspan><tspan x="47.4375" dy="1.2em"
            >1</tspan><tspan x="47.4375" dy="1.2em"
            >0</tspan><tspan x="47.4375" dy="1.2em"
            >1</tspan><tspan x="47.4375" dy="1.2em"
            >1</tspan><tspan x="47.4375" dy="1.2em"
            >0</tspan><tspan x="47.4375" dy="1.2em"
            >0</tspan><tspan x="47.4375" dy="1.2em"
            >1</tspan><tspan x="47.4375" dy="1.2em"
            >0</tspan><tspan x="47.4375" dy="1.2em"
            >1</tspan><tspan x="47.4375" dy="1.2em"
            >1</tspan><tspan x="47.4375" dy="1.2em"
            >0</tspan><tspan x="47.4375" dy="1.2em"
            >1</tspan><tspan x="47.4375" dy="1.2em"
            >0</tspan><tspan x="47.4375" dy="1.2em"
            >1</tspan><tspan x="47.4375" dy="1.2em"
            >1</tspan><tspan x="47.4375" dy="1.2em"
            >1</tspan><tspan x="47.4375" dy="1.2em"
            >0</tspan>
          </text>
          <text className={[styles.rainColumn, styles.c1].join(" ")} x="53.1875" y="13">
            <tspan x="53.1875" dy="0"
            >0</tspan><tspan x="53.1875" dy="1.2em"
            >1</tspan><tspan x="53.1875" dy="1.2em"
            >0</tspan><tspan x="53.1875" dy="1.2em"
            >0</tspan><tspan x="53.1875" dy="1.2em"
            >1</tspan><tspan x="53.1875" dy="1.2em"
            >1</tspan><tspan x="53.1875" dy="1.2em"
            >1</tspan><tspan x="53.1875" dy="1.2em"
            >1</tspan><tspan x="53.1875" dy="1.2em"
            >0</tspan><tspan x="53.1875" dy="1.2em"
            >0</tspan><tspan x="53.1875" dy="1.2em"
            >1</tspan><tspan x="53.1875" dy="1.2em"
            >1</tspan><tspan x="53.1875" dy="1.2em"
            >1</tspan><tspan x="53.1875" dy="1.2em"
            >1</tspan><tspan x="53.1875" dy="1.2em"
            >0</tspan><tspan x="53.1875" dy="1.2em"
            >0</tspan><tspan x="53.1875" dy="1.2em"
            >1</tspan><tspan x="53.1875" dy="1.2em"
            >1</tspan><tspan x="53.1875" dy="1.2em"
            >1</tspan><tspan x="53.1875" dy="1.2em"
            >1</tspan><tspan x="53.1875" dy="1.2em"
            >0</tspan><tspan x="53.1875" dy="1.2em"
            >0</tspan><tspan x="53.1875" dy="1.2em"
            >0</tspan><tspan x="53.1875" dy="1.2em"
            >1</tspan><tspan x="53.1875" dy="1.2em"
            >0</tspan>
          </text>
          <text className={[styles.rainColumn, styles.c5].join(" ")} x="58.9375" y="13">
            <tspan x="58.9375" dy="0"
            >1</tspan><tspan x="58.9375" dy="1.2em"
            >1</tspan><tspan x="58.9375" dy="1.2em"
            >1</tspan><tspan x="58.9375" dy="1.2em"
            >1</tspan><tspan x="58.9375" dy="1.2em"
            >0</tspan><tspan x="58.9375" dy="1.2em"
            >0</tspan><tspan x="58.9375" dy="1.2em"
            >1</tspan><tspan x="58.9375" dy="1.2em"
            >1</tspan><tspan x="58.9375" dy="1.2em"
            >1</tspan><tspan x="58.9375" dy="1.2em"
            >1</tspan><tspan x="58.9375" dy="1.2em"
            >0</tspan><tspan x="58.9375" dy="1.2em"
            >0</tspan><tspan x="58.9375" dy="1.2em"
            >1</tspan><tspan x="58.9375" dy="1.2em"
            >1</tspan><tspan x="58.9375" dy="1.2em"
            >1</tspan><tspan x="58.9375" dy="1.2em"
            >1</tspan><tspan x="58.9375" dy="1.2em"
            >0</tspan><tspan x="58.9375" dy="1.2em"
            >0</tspan><tspan x="58.9375" dy="1.2em"
            >1</tspan><tspan x="58.9375" dy="1.2em"
            >0</tspan><tspan x="58.9375" dy="1.2em"
            >1</tspan><tspan x="58.9375" dy="1.2em"
            >1</tspan><tspan x="58.9375" dy="1.2em"
            >1</tspan><tspan x="58.9375" dy="1.2em"
            >0</tspan><tspan x="58.9375" dy="1.2em"
            >0</tspan>
          </text>
          <text className={[styles.rainColumn, styles.c3].join(" ")} x="64.6875" y="13">
            <tspan x="64.6875" dy="0"
            >0</tspan><tspan x="64.6875" dy="1.2em"
            >0</tspan><tspan x="64.6875" dy="1.2em"
            >0</tspan><tspan x="64.6875" dy="1.2em"
            >0</tspan><tspan x="64.6875" dy="1.2em"
            >1</tspan><tspan x="64.6875" dy="1.2em"
            >1</tspan><tspan x="64.6875" dy="1.2em"
            >0</tspan><tspan x="64.6875" dy="1.2em"
            >0</tspan><tspan x="64.6875" dy="1.2em"
            >0</tspan><tspan x="64.6875" dy="1.2em"
            >0</tspan><tspan x="64.6875" dy="1.2em"
            >1</tspan><tspan x="64.6875" dy="1.2em"
            >1</tspan><tspan x="64.6875" dy="1.2em"
            >0</tspan><tspan x="64.6875" dy="1.2em"
            >0</tspan><tspan x="64.6875" dy="1.2em"
            >0</tspan><tspan x="64.6875" dy="1.2em"
            >0</tspan><tspan x="64.6875" dy="1.2em"
            >1</tspan><tspan x="64.6875" dy="1.2em"
            >1</tspan><tspan x="64.6875" dy="1.2em"
            >0</tspan><tspan x="64.6875" dy="1.2em"
            >1</tspan><tspan x="64.6875" dy="1.2em"
            >0</tspan><tspan x="64.6875" dy="1.2em"
            >1</tspan><tspan x="64.6875" dy="1.2em"
            >1</tspan><tspan x="64.6875" dy="1.2em"
            >1</tspan><tspan x="64.6875" dy="1.2em"
            >0</tspan>
          </text>
          <text className={[styles.rainColumn, styles.c7].join(" ")} x="70.4375" y="13">
            <tspan x="70.4375" dy="0"
            >1</tspan><tspan x="70.4375" dy="1.2em"
            >0</tspan><tspan x="70.4375" dy="1.2em"
            >1</tspan><tspan x="70.4375" dy="1.2em"
            >1</tspan><tspan x="70.4375" dy="1.2em"
            >0</tspan><tspan x="70.4375" dy="1.2em"
            >1</tspan><tspan x="70.4375" dy="1.2em"
            >0</tspan><tspan x="70.4375" dy="1.2em"
            >0</tspan><tspan x="70.4375" dy="1.2em"
            >1</tspan><tspan x="70.4375" dy="1.2em"
            >1</tspan><tspan x="70.4375" dy="1.2em"
            >0</tspan><tspan x="70.4375" dy="1.2em"
            >1</tspan><tspan x="70.4375" dy="1.2em"
            >0</tspan><tspan x="70.4375" dy="1.2em"
            >0</tspan><tspan x="70.4375" dy="1.2em"
            >1</tspan><tspan x="70.4375" dy="1.2em"
            >1</tspan><tspan x="70.4375" dy="1.2em"
            >0</tspan><tspan x="70.4375" dy="1.2em"
            >1</tspan><tspan x="70.4375" dy="1.2em"
            >0</tspan><tspan x="70.4375" dy="1.2em"
            >1</tspan><tspan x="70.4375" dy="1.2em"
            >1</tspan><tspan x="70.4375" dy="1.2em"
            >0</tspan><tspan x="70.4375" dy="1.2em"
            >0</tspan><tspan x="70.4375" dy="1.2em"
            >0</tspan><tspan x="70.4375" dy="1.2em"
            >1</tspan>
          </text>
          <text className={[styles.rainColumn, styles.c2].join(" ")} x="76.1875" y="13">
            <tspan x="76.1875" dy="0"
            >0</tspan><tspan x="76.1875" dy="1.2em"
            >1</tspan><tspan x="76.1875" dy="1.2em"
            >0</tspan><tspan x="76.1875" dy="1.2em"
            >1</tspan><tspan x="76.1875" dy="1.2em"
            >0</tspan><tspan x="76.1875" dy="1.2em"
            >0</tspan><tspan x="76.1875" dy="1.2em"
            >1</tspan><tspan x="76.1875" dy="1.2em"
            >1</tspan><tspan x="76.1875" dy="1.2em"
            >0</tspan><tspan x="76.1875" dy="1.2em"
            >1</tspan><tspan x="76.1875" dy="1.2em"
            >0</tspan><tspan x="76.1875" dy="1.2em"
            >0</tspan><tspan x="76.1875" dy="1.2em"
            >1</tspan><tspan x="76.1875" dy="1.2em"
            >1</tspan><tspan x="76.1875" dy="1.2em"
            >0</tspan><tspan x="76.1875" dy="1.2em"
            >1</tspan><tspan x="76.1875" dy="1.2em"
            >0</tspan><tspan x="76.1875" dy="1.2em"
            >0</tspan><tspan x="76.1875" dy="1.2em"
            >1</tspan><tspan x="76.1875" dy="1.2em"
            >0</tspan><tspan x="76.1875" dy="1.2em"
            >1</tspan><tspan x="76.1875" dy="1.2em"
            >1</tspan><tspan x="76.1875" dy="1.2em"
            >1</tspan><tspan x="76.1875" dy="1.2em"
            >0</tspan><tspan x="76.1875" dy="1.2em"
            >1</tspan>
          </text>
          <text className={[styles.rainColumn, styles.c4].join(" ")} x="81.9375" y="13">
            <tspan x="81.9375" dy="0"
            >1</tspan><tspan x="81.9375" dy="1.2em"
            >1</tspan><tspan x="81.9375" dy="1.2em"
            >1</tspan><tspan x="81.9375" dy="1.2em"
            >0</tspan><tspan x="81.9375" dy="1.2em"
            >1</tspan><tspan x="81.9375" dy="1.2em"
            >1</tspan><tspan x="81.9375" dy="1.2em"
            >1</tspan><tspan x="81.9375" dy="1.2em"
            >1</tspan><tspan x="81.9375" dy="1.2em"
            >1</tspan><tspan x="81.9375" dy="1.2em"
            >0</tspan><tspan x="81.9375" dy="1.2em"
            >1</tspan><tspan x="81.9375" dy="1.2em"
            >1</tspan><tspan x="81.9375" dy="1.2em"
            >1</tspan><tspan x="81.9375" dy="1.2em"
            >1</tspan><tspan x="81.9375" dy="1.2em"
            >1</tspan><tspan x="81.9375" dy="1.2em"
            >0</tspan><tspan x="81.9375" dy="1.2em"
            >1</tspan><tspan x="81.9375" dy="1.2em"
            >1</tspan><tspan x="81.9375" dy="1.2em"
            >1</tspan><tspan x="81.9375" dy="1.2em"
            >1</tspan><tspan x="81.9375" dy="1.2em"
            >0</tspan><tspan x="81.9375" dy="1.2em"
            >0</tspan><tspan x="81.9375" dy="1.2em"
            >0</tspan><tspan x="81.9375" dy="1.2em"
            >1</tspan><tspan x="81.9375" dy="1.2em"
            >0</tspan>
          </text>
          <text className={[styles.rainColumn, styles.c6].join(" ")} x="87.6875" y="13">
            <tspan x="87.6875" dy="0"
            >0</tspan><tspan x="87.6875" dy="1.2em"
            >0</tspan><tspan x="87.6875" dy="1.2em"
            >0</tspan><tspan x="87.6875" dy="1.2em"
            >1</tspan><tspan x="87.6875" dy="1.2em"
            >1</tspan><tspan x="87.6875" dy="1.2em"
            >1</tspan><tspan x="87.6875" dy="1.2em"
            >0</tspan><tspan x="87.6875" dy="1.2em"
            >0</tspan><tspan x="87.6875" dy="1.2em"
            >0</tspan><tspan x="87.6875" dy="1.2em"
            >1</tspan><tspan x="87.6875" dy="1.2em"
            >1</tspan><tspan x="87.6875" dy="1.2em"
            >1</tspan><tspan x="87.6875" dy="1.2em"
            >0</tspan><tspan x="87.6875" dy="1.2em"
            >0</tspan><tspan x="87.6875" dy="1.2em"
            >0</tspan><tspan x="87.6875" dy="1.2em"
            >1</tspan><tspan x="87.6875" dy="1.2em"
            >1</tspan><tspan x="87.6875" dy="1.2em"
            >1</tspan><tspan x="87.6875" dy="1.2em"
            >0</tspan><tspan x="87.6875" dy="1.2em"
            >1</tspan><tspan x="87.6875" dy="1.2em"
            >1</tspan><tspan x="87.6875" dy="1.2em"
            >0</tspan><tspan x="87.6875" dy="1.2em"
            >0</tspan><tspan x="87.6875" dy="1.2em"
            >1</tspan><tspan x="87.6875" dy="1.2em"
            >0</tspan>
          </text>
          <text className={[styles.rainColumn, styles.c2].join(" ")} x="93.6875" y="13">
            <tspan x="93.6875" dy="0"
            >0</tspan><tspan x="93.6875" dy="1.2em"
            >0</tspan><tspan x="93.6875" dy="1.2em"
            >0</tspan><tspan x="93.6875" dy="1.2em"
            >1</tspan><tspan x="93.6875" dy="1.2em"
            >1</tspan><tspan x="93.6875" dy="1.2em"
            >1</tspan><tspan x="93.6875" dy="1.2em"
            >0</tspan><tspan x="93.6875" dy="1.2em"
            >0</tspan><tspan x="93.6875" dy="1.2em"
            >0</tspan><tspan x="93.6875" dy="1.2em"
            >1</tspan><tspan x="93.6875" dy="1.2em"
            >1</tspan><tspan x="93.6875" dy="1.2em"
            >1</tspan><tspan x="93.6875" dy="1.2em"
            >0</tspan><tspan x="93.6875" dy="1.2em"
            >0</tspan><tspan x="93.6875" dy="1.2em"
            >0</tspan><tspan x="93.6875" dy="1.2em"
            >1</tspan><tspan x="93.6875" dy="1.2em"
            >1</tspan><tspan x="93.6875" dy="1.2em"
            >1</tspan><tspan x="93.6875" dy="1.2em"
            >0</tspan><tspan x="93.6875" dy="1.2em"
            >1</tspan><tspan x="93.6875" dy="1.2em"
            >1</tspan><tspan x="93.6875" dy="1.2em"
            >0</tspan><tspan x="93.6875" dy="1.2em"
            >0</tspan><tspan x="93.6875" dy="1.2em"
            >1</tspan><tspan x="93.6875" dy="1.2em"
            >0</tspan>
          </text>
          <text className={[styles.rainColumn, styles.c7].join(" ")} x="99.6875" y="13">
            <tspan x="99.6875" dy="0"
            >0</tspan><tspan x="99.6875" dy="1.2em"
            >0</tspan><tspan x="99.6875" dy="1.2em"
            >0</tspan><tspan x="99.6875" dy="1.2em"
            >1</tspan><tspan x="99.6875" dy="1.2em"
            >1</tspan><tspan x="99.6875" dy="1.2em"
            >1</tspan><tspan x="99.6875" dy="1.2em"
            >0</tspan><tspan x="99.6875" dy="1.2em"
            >0</tspan><tspan x="99.6875" dy="1.2em"
            >0</tspan><tspan x="99.6875" dy="1.2em"
            >1</tspan><tspan x="99.6875" dy="1.2em"
            >1</tspan><tspan x="99.6875" dy="1.2em"
            >1</tspan><tspan x="99.6875" dy="1.2em"
            >0</tspan><tspan x="99.6875" dy="1.2em"
            >0</tspan><tspan x="99.6875" dy="1.2em"
            >0</tspan><tspan x="99.6875" dy="1.2em"
            >1</tspan><tspan x="99.6875" dy="1.2em"
            >1</tspan><tspan x="99.6875" dy="1.2em"
            >1</tspan><tspan x="99.6875" dy="1.2em"
            >0</tspan><tspan x="99.6875" dy="1.2em"
            >1</tspan><tspan x="99.6875" dy="1.2em"
            >1</tspan><tspan x="99.6875" dy="1.2em"
            >0</tspan><tspan x="99.6875" dy="1.2em"
            >0</tspan><tspan x="99.6875" dy="1.2em"
            >1</tspan><tspan x="99.6875" dy="1.2em"
            >0</tspan>
          </text>
        </g>
        <path className={styles.monitorHousing} d="
          M 91.7291 3.61469 
          C 68.9595 1.54380 46.0490 1.54380 23.2794 3.61469
          C 13.2662 4.51826 5.19157 12.3547 3.77871 22.3433
          C 1.47871 38.5254 1.47871 53.8615 3.77871 70.0436
          C 5.19978 80.0240 13.2744 87.8686 23.2794 88.7722
          C 28.5749 89.2431 33.8403 89.6101 39.0755 89.8729
          L 36.9644 101.841
          C 33.8375 102.077 30.7024 102.367 27.5591 102.712
          C 26.8739 102.766 26.2065 102.957 25.5966 103.274
          C 24.9866 103.590 24.4464 104.027 24.0081 104.556
          C 23.5698 105.085 23.2423 105.697 23.0450 106.356
          C 22.8476 107.014 22.7845 107.705 22.8593 108.389
          C 22.9341 109.072 23.1453 109.733 23.4805 110.333
          C 23.8156 110.933 24.2679 111.460 24.8103 111.882
          C 25.3528 112.304 25.9745 112.613 26.6386 112.790
          C 27.3027 112.967 27.9956 113.010 28.6762 112.914
          C 47.8585 110.795 67.2157 110.795 86.3980 112.914
          C 87.0786 113.010 87.7715 112.967 88.4356 112.790
          C 89.0997 112.613 89.7214 112.304 90.2638 111.882
          C 90.8063 111.460 91.2586 110.933 91.5937 110.333
          C 91.9288 109.733 92.1401 109.072 92.2149 108.389
          C 92.2897 107.705 92.2266 107.014 92.0292 106.356
          C 91.8319 105.697 91.5044 105.085 91.0661 104.556
          C 90.6278 104.027 90.0876 103.590 89.4776 103.274
          C 88.8677 102.957 88.2003 102.766 87.5151 102.712
          C 84.3715 102.365 81.2223 102.072 78.0687 101.833
          L 75.9412 89.8647
          C 81.2108 89.6030 86.4746 89.2333 91.7291 88.7558
          C 101.734 87.8522 109.809 80.0158 111.230 70.0354
          C 113.530 53.8533 113.530 38.5172 111.230 22.3350
          C 109.809 12.3547 101.726 4.51826 91.7291 3.61469
          Z
          
          M 24.1912 13.8415
          C 46.3454 11.8148 68.6384 11.8148 90.7926 13.8415
          C 93.3662 14.1147 95.7741 15.2420 97.6322 17.0435
          C 99.4902 18.8450 100.691 21.2169 101.044 23.7808
          C 103.199 38.6393 103.199 53.7311 101.044 68.5897
          C 100.691 71.1536 99.4902 73.5255 97.6322 75.3270
          C 95.7741 77.1285 93.3662 78.2558 90.7926 78.5290
          C 68.6384 80.5557 46.3454 80.5557 24.1912 78.5290
          C 21.6177 78.2558 19.2097 77.1285 17.3517 75.3270
          C 15.4936 73.5255 14.2924 71.1536 13.9398 68.5897
          C 11.7845 53.7311 11.7845 38.6393 13.9398 23.7808
          C 14.2924 21.2169 15.4936 18.8450 17.3517 17.0435
          C 19.2097 15.2420 21.6177 14.1147 24.1912 13.8415
          Z " />
        <path className={[styles.character, styles.lessThan].join(" ")} d="
          M 41.9916 61.6733
          C 42.5988 60.4554 42.6977 59.0462 42.2664 57.7554
          C 41.8351 56.4646 40.9090 55.3979 39.6916 54.7897
          C 36.6276 53.2536 33.4323 50.3622 31.2966 47.3065
          C 33.4323 44.2425 36.6276 41.3593 39.6998 39.8233
          C 40.9176 39.2133 41.8432 38.1445 42.2730 36.8520
          C 42.7028 35.5596 42.6016 34.1493 41.9916 32.9315
          C 41.3816 31.7137 40.3128 30.7880 39.0203 30.3582
          C 37.7279 29.9285 36.3176 30.0297 35.0998 30.6397
          C 28.9638 33.8634 23.9532 38.8769 20.7330 45.0147
          C 20.3810 45.7274 20.1979 46.5116 20.1979 47.3065
          C 20.1979 48.1014 20.3810 48.8856 20.7330 49.5983
          C 23.9554 55.7373 28.9690 60.7509 35.1080 63.9733
          C 36.3259 64.5805 37.7351 64.6794 39.0259 64.2481
          C 40.3166 63.8168 41.3833 62.8907 41.9916 61.6733
          Z " />
        <path className={[styles.character, styles.slash].join(" ")} d="
          M 69.4108 29.1283
          C 69.6789 28.3577 69.7913 27.5415 69.7413 26.7271
          C 69.6914 25.9127 69.4802 25.1164 69.1200 24.3843
          C 68.7598 23.6522 68.2578 22.9989 67.6431 22.4624
          C 67.0284 21.9259 66.3132 21.5169 65.5391 21.2591
          C 64.7650 21.0012 63.9474 20.8997 63.1338 20.9604
          C 62.3202 21.0211 61.5267 21.2428 60.7994 21.6127
          C 60.0722 21.9825 59.4256 22.4932 58.8973 23.1150
          C 58.3690 23.7367 57.9695 24.4573 57.7219 25.2347
          L 45.6469 61.4597
          C 45.3788 62.2303 45.2665 63.0465 45.3164 63.8609
          C 45.3663 64.6752 45.5775 65.4716 45.9377 66.2037
          C 46.2979 66.9358 46.7999 67.5890 47.4147 68.1255
          C 48.0294 68.6620 48.7445 69.0711 49.5186 69.3289
          C 50.2927 69.5867 51.1103 69.6883 51.9240 69.6276
          C 52.7376 69.5669 53.5311 69.3451 54.2583 68.9753
          C 54.9856 68.6054 55.6321 68.0948 56.1604 67.4730
          C 56.6887 66.8512 57.0883 66.1307 57.3358 65.3533
          L 69.4108 29.1283
          Z " />
        <path className={[styles.character, styles.greaterThan].join(" ")} d="
          M 75.3580 54.7897
          C 74.7496 55.0880 74.2063 55.5037 73.7594 56.0130
          C 73.3124 56.5223 72.9707 57.1150 72.7540 57.7569
          C 72.5372 58.3989 72.4497 59.0774 72.4964 59.7533
          C 72.5431 60.4293 72.7231 61.0893 73.0262 61.6953
          C 73.3292 62.3014 73.7492 62.8414 74.2619 63.2844
          C 74.7746 63.7273 75.3700 64.0644 76.0136 64.2761
          C 76.6572 64.4879 77.3364 64.5702 78.0120 64.5182
          C 78.6875 64.4662 79.3461 64.2810 79.9498 63.9733
          C 86.0888 60.7509 91.1024 55.7373 94.3248 49.5983
          C 94.6781 48.8845 94.8619 48.0988 94.8619 47.3024
          C 94.8619 46.5059 94.6781 45.7202 94.3248 45.0065
          C 91.1024 38.8674 86.0888 33.8538 79.9498 30.6315
          C 79.3462 30.3294 78.6891 30.1492 78.0159 30.1011
          C 77.3427 30.0531 76.6667 30.1380 76.0263 30.3512
          C 75.3860 30.5644 74.7939 30.9017 74.2839 31.3437
          C 73.7739 31.7857 73.3559 32.3238 73.0539 32.9274
          C 72.7518 33.5309 72.5716 34.1880 72.5236 34.8612
          C 72.4755 35.5344 72.5604 36.2105 72.7736 36.8508
          C 72.9868 37.4912 73.3241 38.0832 73.7661 38.5933
          C 74.2081 39.1033 74.7462 39.5212 75.3498 39.8233
          C 78.4301 41.3593 81.6173 44.2425 83.7530 47.2983
          C 81.6173 50.3622 78.4301 53.2536 75.3580 54.7897
          Z
        " />
      </svg>
    </div>
  );
};

export default CodeMonitorIcon;