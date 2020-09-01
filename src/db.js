export let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for Graphql",
  },
  {
    id: "link-1",
    url: "www.naver.com",
    description: "naver good!!",
  },
  {
    id: "link-2",
    url: "www.donghyo.com",
    description: "i love donghyo",
  },
];

export function read(id) {
  let link = [];
  links.forEach((data) => {
    if (data.id === id) {
      link = data;
    }
  });
  return link;
}

export function update(id, url, description) {
  let upd = [];
  let data = links.map((data1) => {
    if (id === data1.id) {
      upd.id = id;
      upd.url = url;
      upd.description = description;
      return upd;
    } else {
      return data1;
    }
  });
  console.log(data);
  links = data;
  return upd;
}

export function dete(id) {
  let upd = [];
  links.map((data1) => {
    if (id === data1.id) {
    } else {
      upd.push(data1);
    }
  });
  links = upd;
  return links;
}
