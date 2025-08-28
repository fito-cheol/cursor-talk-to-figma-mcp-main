import React, { useState } from 'react';
import './PhoneVerification.scss';

const PhoneVerification = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    lastDigits: '',
    phoneNumber: '',
    carrier: '',
    agreements: {
      personalInfo: false,
      uniqueInfo: false,
      serviceTerms: false,
      carrierTerms: false
    },
    rememberInfo: false
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAgreementChange = (agreement) => {
    setFormData(prev => ({
      ...prev,
      agreements: {
        ...prev.agreements,
        [agreement]: !prev.agreements[agreement]
      }
    }));
  };

  const handleSubmit = () => {
    console.log('인증 요청:', formData);
  };

  return (
    <div className="phone-verification">
      {/* Status Bar */}
      <div className="status-bar">
        <div className="time">9:41</div>
        <div className="status-icons">
          <div className="cellular"></div>
          <div className="wifi"></div>
          <div className="battery"></div>
        </div>
      </div>

      {/* Top Navigation */}
      <div className="top-navigation">
        <h1 className="nav-title">노란우산 가입</h1>
        <div className="nav-icons">
          <div className="chat-icon"></div>
          <div className="close-icon"></div>
        </div>
      </div>

      {/* Content */}
      <div className="content">
        {/* Title */}
        <div className="title-section">
          <h2 className="main-title">본인 인증</h2>
        </div>

        {/* Form */}
        <div className="form-section">
          {/* 대표자 이름 */}
          <div className="form-group">
            <label className="form-label">대표자 이름</label>
            <div className="input-field">
              <input
                type="text"
                placeholder="이름을 입력해 주세요"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
          </div>

          {/* 대표자 주민등록번호 */}
          <div className="form-group">
            <label className="form-label">대표자 주민등록번호</label>
            <div className="resident-number-field">
              <input
                type="text"
                placeholder="생년월일"
                className="birth-input"
                value={formData.birthDate}
                onChange={(e) => handleInputChange('birthDate', e.target.value)}
              />
              <span className="separator">-</span>
              <input
                type="password"
                placeholder="뒷자리 7자리"
                className="last-digits"
                value={formData.lastDigits}
                onChange={(e) => handleInputChange('lastDigits', e.target.value)}
              />
            </div>
          </div>

          {/* 대표자 휴대폰번호 */}
          <div className="form-group">
            <label className="form-label">대표자 휴대폰번호</label>
            
            {/* 통신사 선택 */}
            <div className="carrier-dropdown">
              <select
                value={formData.carrier}
                onChange={(e) => handleInputChange('carrier', e.target.value)}
              >
                <option value="">통신사</option>
                <option value="skt">SKT</option>
                <option value="kt">KT</option>
                <option value="lg">LG U+</option>
              </select>
              <div className="dropdown-arrow"></div>
            </div>

            {/* 휴대폰 번호 입력 */}
            <div className="input-field">
              <input
                type="tel"
                placeholder="숫자만 입력해 주세요"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              />
            </div>

            {/* 약관 동의 */}
            <div className="agreements-section">
              <div className="agreement-item">
                <input
                  type="checkbox"
                  id="personalInfo"
                  checked={formData.agreements.personalInfo}
                  onChange={() => handleAgreementChange('personalInfo')}
                />
                <label htmlFor="personalInfo">개인정보이용동의</label>
                <button className="view-btn">보기</button>
              </div>
              
              <div className="agreement-item">
                <input
                  type="checkbox"
                  id="uniqueInfo"
                  checked={formData.agreements.uniqueInfo}
                  onChange={() => handleAgreementChange('uniqueInfo')}
                />
                <label htmlFor="uniqueInfo">고유식별정보처리동의</label>
                <button className="view-btn">보기</button>
              </div>
              
              <div className="agreement-item">
                <input
                  type="checkbox"
                  id="serviceTerms"
                  checked={formData.agreements.serviceTerms}
                  onChange={() => handleAgreementChange('serviceTerms')}
                />
                <label htmlFor="serviceTerms">서비스이용약관동의</label>
                <button className="view-btn">보기</button>
              </div>
              
              <div className="agreement-item">
                <input
                  type="checkbox"
                  id="carrierTerms"
                  checked={formData.agreements.carrierTerms}
                  onChange={() => handleAgreementChange('carrierTerms')}
                />
                <label htmlFor="carrierTerms">통신사이용약관동의</label>
                <button className="view-btn">보기</button>
              </div>
            </div>

            {/* 내 정보 기억하기 */}
            <div className="remember-section">
              <div className="remember-header">
                <input
                  type="checkbox"
                  id="rememberInfo"
                  checked={formData.rememberInfo}
                  onChange={() => handleInputChange('rememberInfo', !formData.rememberInfo)}
                />
                <label htmlFor="rememberInfo">
                  내 정보 기억하기
                  <span className="required">필수</span>
                </label>
              </div>
              <p className="remember-description">
                사업자 등록 조회 시 간편하게 본인인증을 할 수 있어요. 정보는 안전하게 저장되니 안심하세요.
              </p>
            </div>

            {/* 인증 요청 버튼 */}
            <button 
              className="verify-button"
              onClick={handleSubmit}
            >
              동의하고 인증 요청하기
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-navigation">
        <button className="prev-button">이전</button>
        <button className="next-button">다음</button>
      </div>
    </div>
  );
};

export default PhoneVerification;
