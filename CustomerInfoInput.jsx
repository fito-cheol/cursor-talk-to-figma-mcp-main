import React, { useState } from 'react';
import './CustomerInfoInput.scss';

const CustomerInfoInput = () => {
  const [selectedIdCard, setSelectedIdCard] = useState('resident');
  const [agreementExpanded, setAgreementExpanded] = useState(true);
  const [agreementChecked, setAgreementChecked] = useState(true);
  const [emailMethods, setEmailMethods] = useState({
    sms: false,
    email: false
  });

  const handleIdCardChange = (type) => {
    setSelectedIdCard(type);
  };

  const handleAgreementToggle = () => {
    setAgreementExpanded(!agreementExpanded);
  };

  const handleAgreementChange = (checked) => {
    setAgreementChecked(checked);
    if (!checked) {
      setEmailMethods({ sms: false, email: false });
    }
  };

  const handleEmailMethodChange = (method) => {
    setEmailMethods(prev => ({
      ...prev,
      [method]: !prev[method]
    }));
  };

  return (
    <div className="customer-info-container">
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
      <div className="top-nav">
        <div className="nav-title">노란우산 가입</div>
        <div className="nav-icons">
          <div className="chat-icon"></div>
          <div className="close-icon"></div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="progress-container">
        <div className="progress-steps">
          <div className="step-circle"></div>
          <div className="step-label">2 사업장정보</div>
          <div className="step-inactive">3</div>
        </div>
      </div>

      {/* Title */}
      <div className="section">
        <div className="title">사업장 및 고객 정보를<br />입력해 주세요</div>
      </div>

      {/* Basic Info Section */}
      <div className="section">
        <div className="section-header">
          <div className="section-title">기본 정보</div>
          <button className="more-btn">더보기</button>
        </div>

        <div className="info-table">
          <div className="info-row">
            <div className="info-label">이름</div>
            <div className="info-value">
              기평생
              <div className="copy-icon"></div>
            </div>
          </div>
          <div className="info-row">
            <div className="info-label">휴대폰번호</div>
            <div className="info-value">010-2345-6789</div>
          </div>
          <div className="info-row">
            <div className="info-label">업체명</div>
            <div className="info-value">기은상사</div>
          </div>
          <div className="info-row">
            <div className="info-label">사업자등록번호</div>
            <div className="info-value">123-45-67890</div>
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="section address-section">
        <div className="address-title">자택 주소</div>
        <button className="address-search-btn">
          <div className="search-icon"></div>
          주소 검색
          <div className="arrow-icon"></div>
        </button>
      </div>

      {/* Email Field */}
      <div className="section">
        <div className="form-field">
          <div className="field-title">
            이메일
            <span className="required">선택</span>
          </div>
          <div className="field-input email-field">
            <input type="text" className="email-input" placeholder="이메일" />
            <span className="email-separator">@</span>
            <select className="email-select">
              <option>선택</option>
            </select>
            <div className="dropdown-icon"></div>
          </div>
        </div>

        <div className="form-field">
          <div className="field-title">
            사업장 전화번호
            <span className="required">선택</span>
          </div>
          <input type="tel" className="field-input" placeholder="입력해주세요." />
        </div>
      </div>

      <div className="divider"></div>

      {/* ID Card Section */}
      <div className="section id-card-section">
        <div className="section-title">신분증 정보</div>
        
        <div className="radio-group">
          <div className="radio-item">
            <div 
              className={`radio-button ${selectedIdCard === 'resident' ? 'checked' : ''}`}
              onClick={() => handleIdCardChange('resident')}
            ></div>
            <div className="radio-label">주민등록증</div>
          </div>
          <div className="radio-item">
            <div 
              className={`radio-button ${selectedIdCard === 'driver' ? 'checked' : ''}`}
              onClick={() => handleIdCardChange('driver')}
            ></div>
            <div className="radio-label">운전면허증</div>
          </div>
        </div>

        <div className="form-field">
          <div className="field-title">발급일</div>
          <input type="text" className="field-input" placeholder="숫자만 입력 (예: 20240101)" />
        </div>
      </div>

      <div className="divider"></div>

      {/* Agreement Section */}
      <div className="section agreement-section">
        <div className="agreement-header">
          <div className="agreement-title">중요정보 수신 동의</div>
          <div className="agreement-required">선택</div>
        </div>

        <div className="agreement-box">
          <div className="agreement-main">
            <div className="agreement-checkbox">
              <div 
                className={`checkbox ${agreementChecked ? 'checked' : ''}`}
                onClick={() => handleAgreementChange(!agreementChecked)}
              ></div>
              <div className="checkbox-label">
                상품안내수단 전체
                <div className="required-badge">필수</div>
              </div>
            </div>
            <div 
              className={`arrow-up ${agreementExpanded ? 'expanded' : ''}`}
              onClick={handleAgreementToggle}
            ></div>
          </div>

          {agreementExpanded && (
            <div className="agreement-items">
              <div className="agreement-item">
                <div 
                  className={`item-checkbox ${emailMethods.sms ? 'checked' : ''}`}
                  onClick={() => handleEmailMethodChange('sms')}
                ></div>
                <div className="item-label">카카오/문자 (SMS)</div>
              </div>
              <div className="agreement-item">
                <div 
                  className={`item-checkbox ${emailMethods.email ? 'checked' : ''}`}
                  onClick={() => handleEmailMethodChange('email')}
                ></div>
                <div className="item-label">이메일</div>
              </div>
            </div>
          )}
        </div>

        <div className="notice">
          <div className="notice-dot"></div>
          <div className="notice-text">납입내역 등의 내용 수신을 원하는 경우, 수신 방법을 '카카오/문자'로 선택해 주세요.</div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="bottom-buttons">
        <div className="button-group">
          <button className="btn btn-secondary">이전</button>
          <button className="btn btn-primary">다음</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfoInput;
