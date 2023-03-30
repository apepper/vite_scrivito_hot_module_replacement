import * as Scrivito from 'scrivito'

export const Homepage = Scrivito.provideObjClass('Homepage', {
  attributes: {
    body: "widgetlist",
  },
  onlyAsRoot: true,
})
