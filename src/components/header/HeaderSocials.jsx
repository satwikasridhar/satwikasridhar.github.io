import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import {SiHackerrank} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/satwikasridhar/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/satwikasridhar" target="_blank"><FaGithub/></a>
        <a href="https://leetcode.com/ssatwika02/" target="_blank"><SiLeetcode/></a>
        <a href="https://hackerrank.com/ssatwika02/" target="_blank"><SiHackerrank/></a>

    </div>
  )
}

export default HeaderSocials