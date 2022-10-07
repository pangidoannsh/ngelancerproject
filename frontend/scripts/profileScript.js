const Create = React.createElement; //untuk mmepersingkan penggunaan fungsi/method

//display tab profile
const profile = () => {
    //variabel penampung nama nama skill pada tab profile
    const nameSkill = [
        'CSS3', 'Javascript', 'Bootstrap5', 'PHP', 'Laravel',
        'React.js', 'Node.js', 'vue.js', 'Tailwind', 'Figma',
        'MongoDB', 'MySQL', 'HTML5', 'HTML', 'CSS', 'jQuery',
        'CSS3', 'Javascript', 'Bootstrap5', 'PHP', 'Laravel',
        'React.js', 'Node.js', 'vue.js', 'Tailwind', 'Figma',
        'MongoDB', 'MySQL', 'HTML5', 'HTML', 'CSS', 'jQuery',
        'CSS3', 'Javascript', 'Bootstrap5', 'PHP', 'Laravel',
        'React.js', 'Node.js', 'vue.js', 'Tailwind', 'Figma',
        'MongoDB', 'MySQL', 'HTML5', 'HTML', 'CSS', 'jQuery'
    ];
    const username = ['Usopp', 'Luffy', 'Zorro'];

    return (Create('div'), { className: "wrapper" },
        [
            //Tentang 
            Create('div', { className: "tentang-saya px-lg-5 mb-5" },
                [
                    Create('h3', { className: "fs-24 fs-sm-16 fw-bold mb-3" }, 'Tentang Saya'),
                    Create('p', { className: "fs-18 fs-sm-12 text-secondary" }, "HI, My name is Budi I'm a " +
                        "Professional with 5 years of experience. With my experience, I will make every customer " +
                        "happy with their purchase. I'm expert and have a lot of skills on web and app programing.")
                ]
            ),
            Create('div', { className: "row" },
                [
                    //Skill
                    Create('div', { className: "col-12 col-md-7 skills px-lg-5 mb-5" },
                        [
                            Create('h3', { className: "fs-24 fs-sm-16 fw-bold mb-3" }, 'Skills'),
                            Create('div', { className: "skills-item" }, nameSkill.map(name => {
                                return (Create('span', { className: "btn fw-bold bg-secondary mb-2 me-2 px-1 py-0 fs-20 fs-sm-12" }, name))
                            }))
                        ]
                    ),
                    //Ulasan
                    Create('div', { className: "col-12 col-md-5 job-history px-lg-5" },
                        [
                            Create('h3', { className: "fs-24 fs-sm-16 fw-bold mb-3" }, 'Riwayat Pekerjaan'),
                            Create('div', { className: "riwayat-wrapper" }, username.map(name => {
                                return (Create('div', { className: "riwayat mb-3" },
                                    [
                                        Create('div', { className: "fw-bold fs-24 fs-sm-16 text-primary" }, name),
                                        Create('div', { className: "fs-16 fs-sm-12 text-secondary" }, "20 Februari - 1 Maret 2022"),
                                        Create('div', { className: "fs-16 fs-sm-12 fw-bold" }, "Landing Page Persero")

                                    ]))
                            }))
                        ]
                    )
                ]
            )

        ]
    )
}

//display portofolio
const portofolio = () => {
    const urlImage = [
        "frontend/images/porto_1.png",
        "frontend/images/porto_2.png",
        "frontend/images/porto_3.png",
        "frontend/images/porto_4.png"
    ]
    return (Create('div', { className: "row px-lg-5 justify-content-center" }, urlImage.map(url => {
        return (Create('div', { className: "col-lg-5 col-md-6 mx-lg-4 mb-lg-5 mb-3" },
            [
                Create('div', { className: "porto-image border rounded-2 py-lg-4 py-3 border-dark text-center mb-3" }, Create('img', { src: url })),
                Create('h4', { className: "porto-name fs-24 fs-sm-20 fw-bold" }, 'Landing Page Company Website')
            ]
        )
        )
    }))
    )
}

//display riwayat pekerjaan
const ulasan = () => {
    const fiveStar = () => {
        return (Create('div', { className: "px-1 d-flex" }, [
            Create('span', { key: "starIcon", className: "material-symbols-outlined rating-ulasan" }, 'star'),
            Create('span', { key: "starIcon", className: "material-symbols-outlined rating-ulasan" }, 'star'),
            Create('span', { key: "starIcon", className: "material-symbols-outlined rating-ulasan" }, 'star'),
            Create('span', { key: "starIcon", className: "material-symbols-outlined rating-ulasan" }, 'star'),
            Create('span', { key: "starIcon", className: "material-symbols-outlined rating-ulasan" }, 'star')
        ]))
    }
    const dataItem = [
        { name: 'Luffy', project: 'Website PT.Mugiwara', date: '1 Oktober 2021', withHr: true },
        { name: 'Budi', project: 'Landing Page Website Budi Company', date: '14 Februari 2022', withHr: true },
        { name: 'Andi', project: 'Website Toko Sarung', date: '29 April 2022', withHr: false },
    ]
    return (Create('div', { className: "px-lg-5" }, dataItem.map(data => {
        if (data.withHr) {
            return (
                [
                    Create('div', { className: "row px-lg-5 pb-2 justify-content-center" }, [

                        Create('div', { className: "col-lg-2 col-4 text-center" }, [
                            Create('div', { className: "image-customer" }, [
                                Create('span', { className: "material-icons customer-icon" }, 'account_circle')
                            ]),
                            Create('div', { className: "name-customer fs-20 fs-sm-15 fw-medium" }, data.name),
                            Create('div', { className: "date fs-16 fs-sm-15 text-secondary" }, data.date)
                        ]),

                        Create('div', { className: "col-lg-9 col-8" }, [
                            Create('div', { className: "fs-20 fs-sm-15 fw-medium name-project-ulasan" }, data.project),
                            Create('div', { className: "fs-20 fs-sm-14 text-black-80 fw-medium" }, 'IDR 2.000.000'),
                            Create('div', { className: "rating  text-secondary py-3" }, [
                                Create('div', { className: "fs-14 fs-sm-12 text-black-80 fw-medium pb-2" }, 'Rating:'),
                                Create('div', { className: "d-flex" }, [
                                    Create('p', { className: "px-1 rounded-1 rating-score fs-sm-12" }, '5/5'),
                                    Create(fiveStar)
                                ])
                            ]),

                            Create('div', { className: "komentar-panel p-2" }, [
                                Create('div', { className: "fs-16 fs-sm-14 " }, 'Komentar'),
                                Create('p', { className: "fs-18 fs-sm-12 text-secondary" }, 'Hasilnya Bagus dan Sesuai Mockup,' +
                                    ' Terimakasih Suskes Terus')
                            ])
                        ])
                    ]),
                    Create('div', { className: "px-lg-5" }, Create('hr'))
                ]
            )
        }
        else {
            return (
                Create('div', { className: "row px-lg-5 pb-2 justify-content-center" }, [

                    Create('div', { className: "col-lg-2 col-4 text-center" }, [
                        Create('div', { className: "image-customer" }, [
                            Create('span', { className: "material-icons customer-icon" }, 'account_circle')
                        ]),
                        Create('div', { className: "name-customer fs-20 fs-sm-15 fw-medium" }, data.name),
                        Create('div', { className: "date fs-16 fs-sm-15 text-secondary" }, data.date)
                    ]),

                    Create('div', { className: "col-lg-9 col-8" }, [
                        Create('div', { className: "fs-20 fs-sm-15 fw-medium name-project-ulasan" }, data.project),
                        Create('div', { className: "fs-20 fs-sm-14 text-black-80 fw-medium" }, 'IDR 2.000.000'),
                        Create('div', { className: "rating  text-secondary py-3" }, [
                            Create('div', { className: "fs-14 fs-sm-12 text-black-80 fw-medium pb-2" }, 'Rating:'),
                            Create('div', { className: "d-flex" }, [
                                Create('p', { className: "px-1 rounded-1 rating-score fs-sm-12" }, '5/5'),
                                Create(fiveStar)
                            ])
                        ]),

                        Create('div', { className: "komentar-panel p-2" }, [
                            Create('div', { className: "fs-16 fs-sm-14 " }, 'Komentar'),
                            Create('p', { className: "fs-18 fs-sm-12 text-secondary" }, 'Hasilnya Bagus dan Sesuai Mockup,' +
                                ' Terimakasih Suskes Terus')
                        ])
                    ])
                ])
            )
        }

    })
    ))
}

ReactDOM.render(Create(profile), document.getElementById("content"));

function profileClick(index) {
    const menu = document.querySelector(".menu-profile")
    for (let i = 0; i < 3; i++) {
        menu.children[i].classList.remove("active")
    }
    menu.children[index].classList.add("active");
    switch (index) {
        case 0:
            ReactDOM.render(Create(profile), document.getElementById("content"));
            break;
        case 1:
            ReactDOM.render(Create(portofolio), document.getElementById("content"));
            break;
        case 2:
            ReactDOM.render(Create(ulasan), document.getElementById("content"));
    }
}