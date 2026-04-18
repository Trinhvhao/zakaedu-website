import { useMemo, useState } from 'react'

const PRICING_PLANS = {
  weekly: [
    {
      name: 'Khởi đầu',
      price: 320,
      duration: '/tuần',
      summary: 'Dành cho học viên nhỏ đang xây nền tảng ban đầu.',
      features: [
        '2 buổi học tương tác mỗi tuần',
        'Tập trung phát âm và từ vựng',
        'Giáo viên phản hồi hằng tuần',
        'Phiếu luyện tập tại nhà',
      ],
      image: '/legacy/assets/images/resources/pricing-one-1-1.png',
    },
    {
      name: 'Tiến bộ',
      price: 440,
      duration: '/tuần',
      summary: 'Phát triển cân bằng giao tiếp, đọc hiểu và ngữ pháp.',
      features: [
        '3 buổi học mỗi tuần',
        'Hoạt động CLB giao tiếp',
        'Cột mốc đánh giá tiến bộ',
        'Cập nhật kết quả cho phụ huynh',
      ],
      image: '/legacy/assets/images/resources/pricing-one-1-2.png',
      recommended: true,
    },
    {
      name: 'Bứt phá',
      price: 580,
      duration: '/tuần',
      summary: 'Tăng cường chuyên sâu để giao tiếp tự tin hơn.',
      features: [
        '4 buổi học mỗi tuần',
        'Luyện thi Cambridge',
        'Buổi hướng dẫn 1 kèm 1',
        'Báo cáo chi tiết theo tháng',
      ],
      image: '/legacy/assets/images/resources/pricing-one-1-3.png',
    },
  ],
  monthly: [
    {
      name: 'Khởi đầu',
      price: 1180,
      duration: '/tháng',
      summary: 'Nền tảng tiếng Anh ổn định cho học viên mới.',
      features: [
        '8 buổi học mỗi tháng',
        'Luyện phát âm và nghe hiểu',
        'Học qua trò chơi trên lớp',
        'Kết nối giáo viên và phụ huynh',
      ],
      image: '/legacy/assets/images/resources/pricing-one-1-1.png',
    },
    {
      name: 'Tiến bộ',
      price: 1590,
      duration: '/tháng',
      summary: 'Lựa chọn phổ biến để phát triển kỹ năng toàn diện.',
      features: [
        '12 buổi học mỗi tháng',
        'Kết hợp giao tiếp và đọc hiểu',
        'Nhiệm vụ học theo dự án',
        'Đánh giá tiến bộ mỗi tháng',
      ],
      image: '/legacy/assets/images/resources/pricing-one-1-2.png',
      recommended: true,
    },
    {
      name: 'Bứt phá',
      price: 1990,
      duration: '/tháng',
      summary: 'Lộ trình tăng tốc với mục tiêu kết quả rõ ràng.',
      features: [
        '16 buổi học mỗi tháng',
        'Lộ trình luyện thi Cambridge',
        'Cố vấn luyện nói chuyên sâu',
        'Báo cáo phân tích kết quả học tập',
      ],
      image: '/legacy/assets/images/resources/pricing-one-1-3.png',
    },
  ],
  yearly: [
    {
      name: 'Khởi đầu',
      price: 12900,
      duration: '/năm',
      summary: 'Xây dựng sự tự tin bền vững theo chương trình dài hạn.',
      features: [
        '96 buổi học mỗi năm',
        'Lộ trình học tập có cấu trúc',
        'Sự kiện giao tiếp theo mùa',
        'Tư vấn đồng hành cho phụ huynh',
      ],
      image: '/legacy/assets/images/resources/pricing-one-1-1.png',
    },
    {
      name: 'Tiến bộ',
      price: 16800,
      duration: '/năm',
      summary: 'Tối ưu chi phí cho tiến bộ ổn định và lâu dài.',
      features: [
        '144 buổi học mỗi năm',
        'Cột mốc sẵn sàng thi Cambridge',
        'Tham gia CLB giao tiếp',
        'Hỗ trợ ưu tiên từ cố vấn',
      ],
      image: '/legacy/assets/images/resources/pricing-one-1-2.png',
      recommended: true,
    },
    {
      name: 'Bứt phá',
      price: 21400,
      duration: '/năm',
      summary: 'Gói nâng cao dành cho học viên đạt mục tiêu cao.',
      features: [
        '192 buổi học mỗi năm',
        'Cố vấn cá nhân hóa theo năng lực',
        'Luyện thi nâng cao chuyên sâu',
        'Hồ sơ tiến bộ đầy đủ cả năm',
      ],
      image: '/legacy/assets/images/resources/pricing-one-1-3.png',
    },
  ],
}

const PERIOD_LABELS = [
  { key: 'weekly', label: 'Theo tuần' },
  { key: 'monthly', label: 'Theo tháng' },
  { key: 'yearly', label: 'Theo năm' },
]

export default function PricingSection() {
  const [period, setPeriod] = useState('weekly')

  const plans = useMemo(() => PRICING_PLANS[period], [period])

  return (
    <>
      <section className="pricing-one">
        <div className="pricing-one__shape-1">
          <img alt="" src="/legacy/assets/images/shapes/pricing-one-shape-1.png" />
        </div>
        <div
          className="pricing-one__shape-bg-1"
          style={{
            backgroundImage:
              'url("/legacy/assets/images/shapes/pricing-one-shape-bg-1.png")',
          }}
        />
        <div
          className="pricing-one__shape-bg-2"
          style={{
            backgroundImage:
              'url("/legacy/assets/images/shapes/pricing-one-shape-bg-2.png")',
          }}
        />
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape-box">
                <div className="section-title__tagline-shape" />
                <div className="section-title__tagline-shape-2" />
              </div>
              <span className="section-title__tagline">Học phí &amp; lộ trình</span>
            </div>
            <h2 className="section-title__title title-animation">
              Gói học linh hoạt cho mọi
              <br />
              học viên{' '}
              <span>trên hành trình phát triển</span>
            </h2>
          </div>

          <div className="pricing-one__inner">
            <div className="pricing-one__main-tab-box tabs-box">
              <div className="pricing-one__tab-buttons-box">
                <div className="pricing-one__discount-box">
                  <p>-10% ưu đãi</p>
                </div>
                <div className="pricing-one__discount-shape-1">
                  <img
                    alt=""
                    src="/legacy/assets/images/shapes/pricing-one-discount--shape-1.png"
                  />
                </div>
                <ul className="tab-buttons list-unstyled">
                  {PERIOD_LABELS.map((item) => (
                    <li
                      key={item.key}
                      className={`tab-btn ${period === item.key ? 'active-btn' : ''}`}
                      onClick={() => setPeriod(item.key)}
                    >
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tabs-content">
                <div className="tab active-tab" id={period}>
                  {plans.map((plan) => (
                    <div key={`${period}-${plan.name}`} className="pricing-one__tab-content-box">
                      {plan.recommended ? (
                        <div className="pricing-one__badge">
                          <p>Đề xuất</p>
                        </div>
                      ) : null}
                      <div className="pricing-one__tab-content-shape-1">
                        <img
                          alt=""
                          src="/legacy/assets/images/shapes/pricing-one-tab-content-shape-1.png"
                        />
                      </div>
                      <div className="pricing-one__tab-content-shape-2">
                        <img
                          alt=""
                          src="/legacy/assets/images/shapes/pricing-one-tab-content-shape-2.png"
                        />
                      </div>
                      <div className="pricing-one__tab-content-left">
                        <div className="pricing-one__img">
                          <img alt={plan.name} src={plan.image} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '40px' }} />
                        </div>
                        <div className="pricing-one__price-box">
                          <p className="pricing-one__price-pack">{plan.name}</p>
                          <h2 className="pricing-one__price" style={{ fontSize: '28px', whiteSpace: 'nowrap' }}>
                            {plan.name === 'Khởi đầu' && '4-6 tuổi'}
                            {plan.name === 'Tiến bộ' && '7-10 tuổi'}
                            {plan.name === 'Bứt phá' && 'Thi Cambridge'}
                          </h2>
                          <p className="pricing-one__text">{plan.summary}</p>
                        </div>
                      </div>
                      <div className="pricing-one__tab-content-right">
                        <ul className="list-unstyled pricing-one__points">
                          {plan.features.map((feature) => (
                            <li key={feature}>
                              <div className="icon">
                                <span className="icon-check" />
                              </div>
                              <div className="text">
                                <p>{feature}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                        <div className="pricing-one__btn-box">
                          <a href="/contact">
                            <span className="icon-plus-1" />
                            Tìm hiểu thêm
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Pricing One End*/}
      {/*Blog One Start*/}
    </>
  )
}
