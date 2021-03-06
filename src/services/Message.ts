const newDate = () => {
  const newDate = new Date()
  let meridiem = "AM"
  let hours = newDate.getHours()
  let minutes = newDate.getMinutes()
  if (hours > 11) {
    meridiem = "PM"
    hours -= 12
  }
  if (minutes < 10) return `${hours}:0${minutes} ${meridiem}`
  return `${hours}:${minutes} ${meridiem}`
}

const arrayMessages = [
  [
    {
      id: 1,
      text: "message",
      additional: {
        video: "",
        audio: "",
        link: "",
        quotedText: "",
      },
      idDialog: 1,
      idOwner: 1,
      createDate: newDate(),
    },
    {
      id: 21,
      text: "message2",
      additional: {
        video: "",
        audio: "",
        link: "",
        quotedText: "quoted text",
      },
      idDialog: 1,
      idOwner: 1,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 2,
      text: "message",
      additional: {
        video: "",
        audio: "",
        link: "https://www.youtube.com/watch?v=nhaBzLqp3OU",
        quotedText: "",
      },
      idDialog: 2,
      idOwner: 2,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 3,
      text: "message",
      additional: {
        video: "",
        audio: "../assets/audio/avtobus_variant_5.mp3",
        link: "",
        quotedText: "",
      },
      idDialog: 3,
      idOwner: 3,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 4,
      text: "message",
      additional: {
        video:
          "https://vod-progressive.akamaized.net/exp=1595307476~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F755%2F16%2F403777679%2F1727192427.mp4~hmac=9b7ee9616b0c74552c8420a955240fad37b7db616e466a49a27fcac52ed37c44/vimeo-prod-skyfire-std-us/01/755/16/403777679/1727192427.mp4?filename=Macro+-+34855.mp4",
        audio: "",
        link: "",
        quotedText: "",
      },
      idDialog: 4,
      idOwner: 4,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 5,
      text: "message",
      additional: {
        video: "",
        audio: "",
        link: "",
        quotedText: "quoted text",
      },
      idDialog: 5,
      idOwner: 5,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 6,
      text: "message",
      additional: {
        video: "",
        audio: "",
        link: "",
        quotedText: "",
      },
      idDialog: 6,
      idOwner: 6,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 7,
      text: "message",
      additional: {
        video: "",
        audio: "",
        link: "",
        quotedText: "",
      },
      idDialog: 7,
      idOwner: 7,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 8,
      text: "message",
      additional: {
        video: "",
        audio: "",
        link: "",
        quotedText: "",
      },
      idDialog: 8,
      idOwner: 8,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 9,
      text: "message",
      additional: {
        video: "",
        audio: "",
        link: "",
        quotedText: "",
      },
      idDialog: 9,
      idOwner: 9,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 10,
      text: "message",
      additional: {
        video: "",
        audio: "",
        link: "",
        quotedText: "",
      },
      idDialog: 10,
      idOwner: 10,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 11,
      text: "message",
      additional: {
        video: "",
        audio: "",
        link: "",
        quotedText: "",
      },
      idDialog: 11,
      idOwner: 11,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 12,
      text: "message",
      additional: {
        video: "",
        audio: "",
        link: "",
        quotedText: "",
      },
      idDialog: 12,
      idOwner: 12,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 13,
      text: "message",
      additional: {
        video: "",
        audio: "",
        link: "",
        quotedText: "",
      },
      idDialog: 13,
      idOwner: 13,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 14,
      text: "message",
      additional: {
        video: "",
        audio: "",
        link: "",
        quotedText: "",
      },
      idDialog: 14,
      idOwner: 14,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 15,
      text: "message",
      additional: {
        video: "",
        audio: "",
        link: "",
        quotedText: "",
      },
      idDialog: 15,
      idOwner: 15,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 16,
      text: "message",
      additional: {
        video: "",
        audio: "",
        link: "",
        quotedText: "",
      },
      idDialog: 16,
      idOwner: 16,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 17,
      text: "message",
      additional: {
        video: "",
        audio: "",
        link: "",
        quotedText: "",
      },
      idDialog: 17,
      idOwner: 17,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 18,
      text: "message",
      additional: {
        video: "",
        audio: "",
        link: "",
        quotedText: "",
      },
      idDialog: 18,
      idOwner: 18,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 19,
      text: "message",
      additional: {
        video: "",
        audio: "",
        link: "",
        quotedText: "",
      },
      idDialog: 19,
      idOwner: 19,
      createDate: newDate(),
    },
  ],
  [
    {
      id: 20,
      text: "message",
      additional: {
        video: "",
        audio: "",
        link: "",
        quotedText: "",
      },
      idDialog: 20,
      idOwner: 20,
      createDate: newDate(),
    },
  ],
]

export default arrayMessages
