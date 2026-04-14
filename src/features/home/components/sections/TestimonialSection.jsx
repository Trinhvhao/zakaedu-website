import ReactMarqueeList from '../shared/ReactMarqueeList'

const TOP_TESTIMONIALS = [
  {
    name: 'Emily Carter',
    role: 'Phụ huynh học viên',
    title: 'Rất đáng để đầu tư!',
    quoteLines: [
      'Con tôi từng ngại nói tiếng Anh,',
      'nhưng sau vài tháng học tại trung tâm',
      'bé đã tự tin giao tiếp hơn rất nhiều!',
    ],
    image: '/legacy/assets/images/testimonial/testimonial-1-1.jpg',
  },
  {
    name: 'Michael Brown',
    role: 'Phụ huynh lớp 4',
    title: 'Chuyên nghiệp và tận tâm!',
    quoteLines: [
      'Giáo viên theo sát từng buổi học,',
      'bài giảng dễ hiểu và rất sinh động,',
      'con tôi học vui và tiến bộ rõ ràng.',
    ],
    image: '/legacy/assets/images/testimonial/testimonial-1-2.jpg',
  },
  {
    name: 'Sarah Thompson',
    role: 'Phụ huynh lớp 3',
    title: 'Tiến bộ rõ sau từng buổi!',
    quoteLines: [
      'Mỗi tuần con đều có bài tập ứng dụng,',
      'phát âm chuẩn hơn và nói tự nhiên hơn,',
      'gia đình tôi rất hài lòng với kết quả.',
    ],
    image: '/legacy/assets/images/testimonial/testimonial-1-3.jpg',
  },
  {
    name: 'John Peterson',
    role: 'Phụ huynh lớp 5',
    title: 'Cực kỳ yên tâm khi gửi con!',
    quoteLines: [
      'Lịch học linh hoạt nên gia đình dễ sắp xếp,',
      'giáo viên nhiệt tình và quan tâm sát sao,',
      'con tôi tự tin hơn sau từng chủ đề học.',
    ],
    image: '/legacy/assets/images/testimonial/testimonial-1-4.jpg',
  },
]

const BOTTOM_TESTIMONIALS = [
  {
    ...TOP_TESTIMONIALS[2],
    image: '/legacy/assets/images/testimonial/testimonial-1-5.jpg',
  },
  {
    ...TOP_TESTIMONIALS[0],
    image: '/legacy/assets/images/testimonial/testimonial-1-6.jpg',
  },
  {
    ...TOP_TESTIMONIALS[1],
    image: '/legacy/assets/images/testimonial/testimonial-1-7.jpg',
  },
  {
    ...TOP_TESTIMONIALS[3],
    image: '/legacy/assets/images/testimonial/testimonial-1-8.jpg',
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
