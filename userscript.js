// ==UserScript==
// @name                github-ossinsight
// @namespace           https://github.com/lly-ke/github-ossinsight
// @version             2022.12.20
// @description         A Tampermonkey script that helps you quickly link to [ossinsight](https://ossinsight.io/) in your GitHub repository to quickly analyze the health of an open source project for more multidimensional insight into an open source project
// @description:zh      一个 Tampermonkey(油猴) 脚本，它可以帮助您在 GitHub 仓库中快速链接到 [ossinsight](https://ossinsight.io/) ， 以便快速分析开源项目健康状况以更在多维度深入探究一个开源项目
// @description:zh-CN   一个 Tampermonkey(油猴) 脚本，它可以帮助您在 GitHub 仓库中快速链接到 [ossinsight](https://ossinsight.io/) ， 以便快速分析开源项目健康状况以更在多维度深入探究一个开源项目
// @author              lly-ke
// @match               https://github.com/*
// @icon                https://raw.githubusercontent.com/lly-ke/github-ossinsight/main/images/logo.svg
// @grant               none
// @license             MIT
// ==/UserScript==

(function () {
  'use strict'
  const svgStr = `<?xml  version="1.0" encoding="UTF-8" standalone="no"?>
<svg
  width="16px"
  height="15px"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   viewBox="0 0 128 80"
   id="svg2"
   version="1.1"
   inkscape:version="0.48.5 r10040"
   width="100%"
   height="100%"
   sodipodi:docname="activity-log-manager.svg">
  <metadata
     id="metadata76">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1082"
     inkscape:window-height="570"
     id="namedview74"
     showgrid="false"
     inkscape:zoom="2.4583334"
     inkscape:cx="97.683497"
     inkscape:cy="32.343562"
     inkscape:window-x="15"
     inkscape:window-y="39"
     inkscape:window-maximized="0"
     inkscape:current-layer="svg2" />
  <defs
     id="defs4">
    <linearGradient
       id="linearGradient3764"
       x1="1"
       x2="47"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0,-1,1,0,-1.5e-6,47.999998)">
      <stop
         stop-color="#8358b4"
         stop-opacity="1"
         id="stop7" />
      <stop
         offset="1"
         stop-color="#8d65ba"
         stop-opacity="1"
         id="stop9" />
    </linearGradient>
    <clipPath
       id="clipPath-057129763">
      <g
         transform="translate(0,-1004.3622)"
         id="g12">
        <path
           d="m -24,13 c 0,1.105 -0.672,2 -1.5,2 -0.828,0 -1.5,-0.895 -1.5,-2 0,-1.105 0.672,-2 1.5,-2 0.828,0 1.5,0.895 1.5,2 z"
           transform="matrix(15.333333,0,0,11.5,414.99999,878.8622)"
           id="path14"
           inkscape:connector-curvature="0"
           style="fill:#1890d0" />
      </g>
    </clipPath>
    <clipPath
       id="clipPath-064426159">
      <g
         transform="translate(0,-1004.3622)"
         id="g17">
        <path
           d="m -24,13 c 0,1.105 -0.672,2 -1.5,2 -0.828,0 -1.5,-0.895 -1.5,-2 0,-1.105 0.672,-2 1.5,-2 0.828,0 1.5,0.895 1.5,2 z"
           transform="matrix(15.333333,0,0,11.5,414.99999,878.8622)"
           id="path19"
           inkscape:connector-curvature="0"
           style="fill:#1890d0" />
      </g>
    </clipPath>
  </defs>
  <g
     id="g33"
     transform="translate(0,80)" />
  <path
     style="fill:#2a7fff;fill-opacity:1;fill-rule:nonzero;stroke:none"
     inkscape:connector-curvature="0"
     id="path61"
     d="m 124.3786,58.780229 c -1.27749,-1.795307 -2.68782,-3.48499 -4.11179,-5.150822 C 112.62916,44.68703 103.86053,36.715539 94.250452,30.927693 88.115128,27.228104 81.543761,24.247314 74.74074,22.809725 71.279616,22.090933 67.893432,21.719607 64.319891,21.705982 c -3.461128,0 -6.918848,0.384951 -10.37997,1.103743 -6.813243,1.437589 -13.360765,4.418379 -19.496087,8.117968 -9.606671,5.787846 -18.388938,13.762746 -26.0538323,22.701714 -1.4103405,1.662427 -2.7934283,3.352111 -4.0709103,5.150822 -1.7441892,2.394851 -1.7441892,5.21552 0,7.61037 3.9005794,5.467639 8.5574296,10.322066 13.2687846,14.784739 10.192606,9.569192 21.863688,17.578152 34.73049,20.811052 3.978932,0.99813 7.971493,1.47846 11.977677,1.47846 4.057286,0 8.022589,-0.48033 12.001521,-1.47846 12.866803,-3.2329 24.551506,-11.24526 34.757746,-20.811052 4.73861,-4.445654 9.38182,-9.313696 13.29263,-14.784739 1.71694,-2.39485 1.71694,-5.215519 0,-7.61037 m 0,0" />
  <path
     style="fill:#f9f9f9;fill-opacity:1;fill-rule:nonzero;stroke:none"
     inkscape:connector-curvature="0"
     id="path63"
     d="m 95.010128,62.585414 c 0,16.927497 -13.728682,30.659556 -30.65958,30.659556 -16.927494,0 -30.659579,-13.728655 -30.659579,-30.659556 0,-16.927494 13.728682,-30.659582 30.659579,-30.659582 16.927497,0 30.65958,13.728679 30.65958,30.659582 m 0,0" />
  <path
     style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
     inkscape:connector-curvature="0"
     id="SVGCleanerId_0"
     d="m 81.383648,62.585414 c 0,9.395467 -7.624015,17.019479 -17.0331,17.019479 -9.409084,0 -17.033099,-7.624012 -17.033099,-17.019479 0,-9.409081 7.624015,-17.033104 17.033099,-17.033104 9.409085,0 17.0331,7.624023 17.0331,17.033104 m 0,0" />
  <path
     sodipodi:type="arc"
     style="fill:#f9f9f9;fill-opacity:1;fill-rule:nonzero;stroke:none"
     id="path2994"
     sodipodi:cx="60.403698"
     sodipodi:cy="61.555935"
     sodipodi:rx="5.1774597"
     sodipodi:ry="4.889823"
     d="m 65.581158,61.555935 a 5.1774597,4.889823 0 1 1 -10.35492,0 5.1774597,4.889823 0 1 1 10.35492,0 z"
     transform="translate(12.066285,-6.7626366)" />
</svg>
`

  const el = document.querySelector('.pagehead-actions')
  const [owner, repo] = location.pathname.split('/').slice(1, 3)
  const targetUrl = `https://ossinsight.io/analyze/${owner}/${repo}`
  const title = `${repo} 仓库对应的 ossinsight 分析页面`
  if (!el) {
    console.log('github-ossinsight: 没有找到pagehead-actions元素, 无法添加按钮')
    return
  }
  el.insertAdjacentHTML(
    'afterbegin',
    `<li><a id="github-ossinsight" href="${targetUrl}" target="_blank" rel="noopener noreferrer" title="${title}" aria-label="${title}" class="btn btn-sm tooltipped tooltipped-s">${svgStr}</a></li>`
  )
})();
