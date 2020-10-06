import React from 'react';
import './App.css';
import Contents from './component/contents.js';
import Blocks from './component/blocks.js';
import NewFeed from './component/newfeed.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div class="background">
          <h2>React Demo</h2>
          <div class="contents">
            <Contents
              img='./2.png'
              title="Tổng quan về React và cách sử dụng thư viện"
              text="React là một thư viện JavaScript mã nguồn mở, giao diện người dùng để xây dựng giao diện người 
              dùng hoặc các thành phần UI. Nó được duy trì bởi Facebook và một cộng đồng các nhà phát triển và công ty cá nhân.
              React có thể được sử dụng như một cơ sở để phát triển các ứng dụng trang đơn hoặc di động..."
            />
            <Contents
              img='./1.jpg'
              title="Getting started with react"
              text="Nếu bạn muốn sử dụng trình soạn thảo văn bản của riêng mình, bạn cũng có thể 
              tải xuống tệp HTML này , chỉnh sửa và mở nó từ hệ thống tệp cục bộ trong trình duyệt của bạn.
               Nó thực hiện chuyển đổi mã thời gian chạy chậm, vì vậy chúng tôi chỉ khuyên bạn nên sử dụng nó cho các bản trình diễn đơn giản..."
            />
            <Contents
              img='./5.jpg'
              title="FullStack Station chuyển tên miền từ Business Card"
              text="Có những thời điểm eo hẹp về thời gian, lẫn kiến thức khiến Fullstack Station không thể tạo ra nội dung mới để đáp ứng đủ nhu cầu, sự mong đợi của mọi người. Nay với sự thay đổi về tên miền, 
              Fullstack Station sẽ thoát khỏi vỏ bọc là 1 blog đơn thuần và sẽ cung cấp nhiều bài viết chất lượng hơn nữa..."
            />
            <Contents
              img='./4.jpg'
              title="Hướng dẫn học react"
              text="Khóa học này sẽ giúp bạn biết về một số chức năng chính cần thiết để sắp xếp, lọc và phân loại thông tin trong cơ sở dữ liệu,
              chỉnh sửa và mở nó từ hệ thống tệp cục bộ trong trình duyệt của bạn."
            />
            <Contents
              img='./3.jpg'
              title="Hướng dẫn sử dụng Redux hiệu quả trong ứng dụng React"
              text="Redux là một thư viện JavaScript mã nguồn mở để quản lý trạng thái ứng dụng. Nó được sử dụng phổ biến nhất với các thư viện như React hoặc Angular để xây dựng giao diện người dùng. 
              Tương tự như kiến ​​trúc Flux của Facebook, nó được tạo bởi Dan Abramov và Andrew Clark."
            />
          </div>
          <div class="block">
            <Blocks />
            <div class="new_feeds">
              <div class="newfeed-title">BÀI VIẾT MỚI</div>

              <NewFeed img='./3.jpg'
                title="Hướng dẫn học react"
                text="Th11 28 2018 | Công nghệ,Hệ điều hành,máy hủ web,Môi trường phát triển" />
              <NewFeed img='./5.jpg'
                title="FullStack Station chuyển tên miền từ Business Card"
                text="Khóa học lập trình C++ cơ bản cho người mới bắt đầu. Khóa học này sẽ cung cấp" />
              <NewFeed img='./4.jpg'
                title="Hướng dẫn học react sao cho hiệu quả"
                text="Học tập cùng chuyên gia,
                        tham gia khoá học lập trình để nâng cao kỹ năng bản thân!" />
              <NewFeed img='./1.jpg'
                title="JavaScript cơ bản"
                text="Giúp học viên nắm vững các nguyên tắc và cú pháp cơ bản trong Javascript - ngôn ngữ...." />
            </div>
          </div>


        </div>

      </div>
    )
  }
}

// function Letter(props) {
//   let Style = {
//     float: "left",
//     fontSize: "60px",
//     backgroundColor: props.bgColor,
//     marginLeft: "10px",
//   }
//   return <div style={Style}>{props.text}</div>
// }


export default App;
