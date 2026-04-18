import ReactMarqueeList from '../shared/ReactMarqueeList'

const TOP_TESTIMONIALS = [
  {
    name: 'Nguyễn Thu Hương',
    role: 'Phụ huynh bé lớp 2',
    title: 'Rất đáng để đầu tư!',
    quoteLines: [
      'Con tôi từng ngại nói tiếng Anh,',
      'nhưng sau vài tháng học tại trung tâm',
      'bé đã tự tin giao tiếp hơn rất nhiều!',
    ],
    image: 'https://images.pexels.com/photos/10264338/pexels-photo-10264338.jpeg',
  },
  {
    name: 'Trần Hoài Nam',
    role: 'Phụ huynh bé lớp 4',
    title: 'Chuyên nghiệp và tận tâm!',
    quoteLines: [
      'Giáo viên theo sát từng buổi học,',
      'bài giảng dễ hiểu và rất sinh động,',
      'con tôi học vui và tiến bộ rõ ràng.',
    ],
    image: 'https://images.pexels.com/photos/27023191/pexels-photo-27023191.jpeg',
  },
  {
    name: 'Lê Thị Mai',
    role: 'Phụ huynh bé lớp 3',
    title: 'Tiến bộ rõ sau từng buổi!',
    quoteLines: [
      'Mỗi tuần con đều có bài tập ứng dụng,',
      'phát âm chuẩn hơn và nói tự nhiên hơn,',
      'gia đình tôi rất hài lòng với kết quả.',
    ],
    image: 'https://images.pexels.com/photos/33193923/pexels-photo-33193923.jpeg?auto=compress&cs=tinysrgb&w=160&h=160&fit=crop',
  },
  {
    name: 'Phạm Quang Huy',
    role: 'Phụ huynh bé lớp 5',
    title: 'Cực kỳ yên tâm khi gửi con!',
    quoteLines: [
      'Lịch học linh hoạt nên gia đình dễ sắp xếp,',
      'giáo viên nhiệt tình và quan tâm sát sao,',
      'con tôi tự tin hơn sau từng chủ đề học.',
    ],
    image: 'https://media.istockphoto.com/id/692732494/vi/anh/ch%C3%A2n-dung-doanh-nh%C3%A2n-tr%E1%BA%BB-ch%C3%A2u-%C3%A1-h%E1%BA%A1nh-ph%C3%BAc-trong-qu%C3%A1n-c%C3%A0-ph%C3%AA.jpg?b=1&s=612x612&w=0&k=20&c=qmB6KgHinAKEOqZlbVj6kY_AGdLz6AXtwWAB7Ly9aNo=',
  },
  {
    name: 'Vũ Lan Anh',
    role: 'Phụ huynh bé lớp 2',
    title: 'Lựa chọn tuyệt vời cho con!',
    quoteLines: [
      'Ban đầu con e ngại, nhưng giáo viên rất tốt bụng,',
      'tạo môi trường vui vẻ để bé mạnh dạn học hỏi,',
      'bây giờ con thích đi học tiếng Anh lắm.',
    ],
    image: 'https://images.pexels.com/photos/33193912/pexels-photo-33193912.jpeg?auto=compress&cs=tinysrgb&w=160&h=160&fit=crop',
  },
  {
    name: 'Đặng Minh Khoa',
    role: 'Phụ huynh bé lớp 3',
    title: 'Chất lượng đích thực, giá trị xứng đáng!',
    quoteLines: [
      'Không chỉ học tiếng Anh mà còn được rèn kỹ năng',
      'giao tiếp, tư duy logic, con tôi phát triển toàn diện,',
      'lên lớp 4 con học tốt hơn so với bạn bè rất nhiều.',
    ],
    image: 'https://media.istockphoto.com/id/1790810318/vi/anh/ch%C3%A2n-dung-nam-doanh-nh%C3%A2n-ch%C3%A2u-%C3%A1-t%E1%BA%A1o-d%C3%A1ng-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng.jpg?b=1&s=612x612&w=0&k=20&c=xQ__Bto4GYGPF210cKPMFlFPsY1bnSuXgVnagHNf1wA=',
  },
]

const BOTTOM_TESTIMONIALS = [
  {
    ...TOP_TESTIMONIALS[2],
  },
  {
    ...TOP_TESTIMONIALS[0],
  },
  {
    ...TOP_TESTIMONIALS[1],
  },
  {
    ...TOP_TESTIMONIALS[3],
  },
  {
    ...TOP_TESTIMONIALS[4],
  },
  {
    ...TOP_TESTIMONIALS[5],
  },
]

function TestimonialCard({ item }) {
  return (
    <div className="testimonial-one__single">
      <div className="testimonial-one__quote-icon">
        <img alt="" src="/legacy/assets/images/icon/quote-icon-1.png" />
      </div>
      <div className="testimonial-one__client-info">
        <div className="testimonial-one__client-content">
          <h4 className="testimonial-one__client-name">
            <a href="/legacy/pages/testimonials/index.html">{item.name}</a>
          </h4>
          <p className="testimonial-one__client-sub-title">{item.role}</p>
        </div>
        <div className="testimonial-one__client-img">
          <img alt="" src={item.image} />
        </div>
      </div>
      <span className="testimonial-one__sub-title">{item.title}</span>
      <p className="testimonial-one__text">
        &quot;{item.quoteLines[0]}
        <br />
        {item.quoteLines[1]}
        <br />
        {item.quoteLines[2]}&quot;
      </p>
      <div className="testimonial-one__rating-and-date">
        <div className="testimonial-one__rating">
          <span className="icon-star" />
          <span className="icon-star" />
          <span className="icon-star" />
          <span className="icon-star" />
          <span className="icon-star" />
        </div>
        <p className="testimonial-one__date">Mới đây</p>
      </div>
    </div>
  )
}

export default function TestimonialSection() {
  return (
    <>
    <section className="testimonial-one">
      <div className="testimonial-one__shape-1">
        <img alt="" src="/legacy/assets/images/shapes/testimonial-one-shape-1.png" />
      </div>
      <div className="testimonial-one__shape-2">
      </div>
      <div className="testimonial-one__shape-3">
      </div>
      <div className="testimonial-one__wrap">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape-box">
              <div className="section-title__tagline-shape">
              </div>
              <div className="section-title__tagline-shape-2">
              </div>
            </div>
            <span className="section-title__tagline">
              Đánh giá phụ huynh
            </span>
          </div>
          <h2 className="section-title__title title-animation">
            Phụ huynh nói gì{' '}
            <span>
              về hành trình
              học tập
            </span>
            <br />
            <span>
              tiếng Anh của bé?
            </span>
          </h2>
        </div>
        <ReactMarqueeList duration={58} listClassName="list-unstyled testimonial-one__list">
          {TOP_TESTIMONIALS.map((item) => (
            <li key={`top-${item.name}`}>
              <TestimonialCard item={item} />
            </li>
          ))}
        </ReactMarqueeList>
        <ReactMarqueeList duration={58} reverse listClassName="list-unstyled testimonial-one__list testimonial-one__list--two">
          {BOTTOM_TESTIMONIALS.map((item) => (
            <li key={`bottom-${item.name}-${item.image}`}>
              <TestimonialCard item={item} />
            </li>
          ))}
        </ReactMarqueeList>
      </div>
    </section>
    {/*Testimonial One End */}
    {/* Brand One Start */}
    </>
  )
}
