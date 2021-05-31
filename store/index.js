import experienceData from './../data/experience.json'

export const state = () => ({
  repos: [
    {
      id: '2',
      img_url: require('./../assets/project/cal.jpg'),
      name: 'Vuetify-Firestore Calendar',
      tags: [
        { name: 'vue', color: 'background-color:#40B882;' },
        { name: 'vuetify', color: 'background-color:#1867C0;' },
        { name: 'firebase', color: 'background-color:#f6830d;' },
      ],
      description:
        'A Vue2 and Vuetify based calendar application using Cloud Firestore to store and update events.',
      github: 'Vue-Calendar-Firestore',
    },
    {
      id: '3',
      img_url: require('./../assets/project/dash.png'),
      name: 'Vue/Bootstrap Dashboard',
      tags: [
        { name: 'vue', color: 'background-color:#40B882;' },
        { name: 'bootstrap', color: 'background-color:#1867C0;' },
        {
          name: 'vuex',
          color: 'background-color:#F6830D;',
        },
      ],
      description:
        'A generic dashboard template using Vue3 and Bootstrap with VueX for state management for CRUD functionality.',
      github: 'dashboard-template',
    },
    {
      id: '4',
      img_url: require('./../assets/project/reddit.svg'),
      name: 'Subreddit Search with Vue',
      tags: [
        { name: 'vue', color: 'background-color:#40B882;' },
        { name: 'js', color: 'background-color:#1867C0;' },
        {
          name: 'reddit-api',
          color: 'background-color:#F6830D;',
        },
      ],
      description:
        'A basic VueJS application utilizing Reddit API to fetch top posts from a subreddit, currently hard coded to fetch "r/aww".',
      github: 'reddit-client-vue',
    },
    {
      id: '1',
      img_url: require('../assets/project/detect.png'),
      name: 'Social Distance Detection',
      tags: [
        { name: 'python', color: 'background-color:#3772A5;' },
        { name: 'caffe', color: 'background-color:#BD0101' },
        { name: 'opencv', color: 'background-color:#40B882;' },
      ],
      description:
        'OpenCV with Python based project using Caffe and Triangle Similarity Theorem to identify Social Distance Breaches.',
      github: 'Social-Distance-Breach-Detector-OpenCV-DL',
    },
    {
      id: '5',
      img_url: require('./../assets/project/mask.png'),
      name: 'Real Time Mask Detection',
      tags: [
        { name: 'python', color: 'background-color:#3772A5;' },
        { name: 'keras', color: 'background-color:#BD0101;' },
        { name: 'cnn', color: 'background-color:#1867C0;' },
      ],
      description:
        'Deep Learning based Mask Detector using OpenCV. CNN trained model using Keras on Tensorflow.',
      github: 'Mask-Detector-DL-OpenCV',
    },
    {
      id: '6',
      img_url: require('./../assets/project/face.png'),
      name: 'Smart Attendance System',
      tags: [
        { name: 'python', color: 'background-color:#3772A5;' },
        { name: 'face-recognition', color: 'background-color:#40B882;' },
      ],
      description:
        'Automated Attendance based on Face Recognition through OpenCV in Python and Tkinter',
      github: 'Smart-Attendance',
    },
  ],
  experience: experienceData,
})

export const mutations = {}

export const actions = {}
