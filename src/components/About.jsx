import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className='row bg-dark'>
        <div className='col-6 align-content-center my-5'>
        <h4 className='text-white '>CYBERSOFT - ĐÀO TẠO CHUYÊN GIA LẬP TRÌNH</h4>
        <p className='text-white '>
Đào tạo cho mọi đối tượng từ người trái ngành, người mới bắt đầu, sinh viên công nghệ thông tin đến các bạn đã có có nghề lập trình. Đào tạo ra những lập trình viên tài năng, phát huy tố chất, tư duy lập trình, có định hướng để trở thành những lập trình chuyên nghiệp. Giáo trình được may đo và biên soạn dành riêng cho các bạn học lập trình.</p>
        </div>
        <div className='col-6'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kcSEsljlges" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

      </div>
    )
  }
}
