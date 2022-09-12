import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import Theme from '../assets/Theme.mp3'

export default function ThemeButton() {
  return (
    <ReactAudioPlayer
    src='../assets/Theme.mp3'
    autoPlay
    controls
    />
  )
}







