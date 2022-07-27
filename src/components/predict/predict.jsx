import React, { useState } from "react";
import image from "images/collecting.png";
import {
  Content,
  DragDrop,
  StyledForm,
  StyledButton,
} from "components/predict/predictStyle.js";
import FloatInput from "components/styledComponents/FloatInput/index.jsx";
import { Form, Select, Checkbox, Radio } from "antd";

const { Option } = Select;

export default function Predict() {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // at least one file has been selected so do something
      // handleFiles(e.target.files);
    }
  };

  const onFinish = () => {};

  return (
    <Content>
      <img src={image} className="vector" />

      <DragDrop>
        <StyledForm name="customer-details" onFinish={onFinish}>
          <div className="customer-details">
            <div className="title">
              Customer Details
              <div className="horizontal-line" />
              <div className="customer-details-fields">
                <div>
                  <Form.Item name="customer-name">
                    <FloatInput
                      label="Customer name"
                      placeholder="Customer name"
                      name="customer-name"
                    />
                  </Form.Item>
                  <Form.Item name="addr">
                    <FloatInput
                      label="Address"
                      placeholder="Address"
                      name="addr"
                    />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item name="home-ownership">
                    <Select name="home_ownership">
                      {["Rent", "Own", "Mortgage", "Other"].map((ownership) => (
                        <Option value={ownership}>{ownership}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <div className="grid-sub-col-2">
                    <div>
                      <Form.Item name="addr-state">
                        <FloatInput
                          label="State"
                          placeholder="State"
                          name="addr-state"
                        />
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item name="zip_code">
                        <FloatInput
                          label="Zip code"
                          placeholder="Zip code"
                          name="zip_code"
                        />
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="employment-details">
            <div className="title">
              Employment Details
              <div className="horizontal-line" />
            </div>
            <div className="employment-details-fields">
              <div>
                <Form.Item name="emp-title">
                  <FloatInput
                    label="Employment title"
                    placeholder="Employment title"
                    name="emp-title"
                  />
                </Form.Item>
                <Form.Item name="annual-inc">
                  <FloatInput
                    label="Annual income"
                    placeholder="Annual income"
                    name="annual-inc"
                  />
                </Form.Item>
              </div>
              <div>
                <Form.Item name="zip_code">
                  <FloatInput
                    label="Employment length"
                    placeholder="Employment length"
                    name="zip_code"
                  />
                </Form.Item>
                <Form.Item>
                  <Checkbox>Verified</Checkbox>
                </Form.Item>
              </div>
            </div>
          </div>
          <div className="loan-details">
            <div className="title">
              Loan Details
              <div className="horizontal-line" />
            </div>
            <div className="loan-details-fields">
              <div>
                <Form.Item name="loan-amount">
                  <FloatInput
                    label="Loan amount"
                    placeholder="Loan amount"
                    name="loan-amount"
                  />
                </Form.Item>
                <Form.Item name="title">
                  <FloatInput
                    label="Loan title"
                    placeholder="Loan title"
                    name="title"
                  />
                </Form.Item>
                <div className="grid-sub-col-2">
                  <div>
                    <Form.Item name="loan-type" style={{ display: "flex" }}>
                      <Radio.Group name="loan-type">
                        <Radio value="joint">Joint</Radio>
                        <Radio value="individual">Individual</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item name="dti">
                      <FloatInput label="DTI" placeholder="DTI" name="dti" />
                    </Form.Item>
                  </div>
                </div>

                <div className="grid-sub-col-3">
                  <div>
                    <Form.Item name="int-rate">
                      <FloatInput
                        label="Interest rate"
                        placeholder="Interest rate"
                        name="int-rate"
                      />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item name="installment">
                      <FloatInput
                        label="Installments"
                        placeholder="Installments"
                        name="installment"
                      />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item name="issue-d">
                      <FloatInput
                        label="Month"
                        placeholder="Month"
                        name="issue-d"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="grid-sub-col-2">
                  <div>
                    <Form.Item name="open_acc">
                      <FloatInput
                        label="Open account"
                        placeholder="Open account"
                        name="open_acc"
                      />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item name="pub-rec">
                      <FloatInput
                        label="Derogatory public records"
                        placeholder="Derogatory public records"
                        name="pub-rec"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="grid-sub-col-2">
                  <div>
                    <Form.Item name="mort-acc">
                      <FloatInput
                        label="Mortgage account"
                        placeholder="Mortgage account"
                        name="mort-acc"
                      />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item name="pub-rec-bankruptcies">
                      <FloatInput
                        label="Public bankruptices"
                        placeholder="Public bankruptices"
                        name="pub-rec-bankruptcies"
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>
              <div>
                <Form.Item name="purpose">
                  <FloatInput
                    label="Purpose"
                    placeholder="Purpose"
                    name="purpose"
                  />
                </Form.Item>
                <div className="grid-sub-col-2">
                  <div>
                    <Form.Item name="grade">
                      <FloatInput
                        label="Grade"
                        placeholder="Grade"
                        name="grade"
                      />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item name="sub-grade">
                      <FloatInput
                        label="Sub grade"
                        placeholder="Sub grade"
                        name="sub-grade"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="grid-sub-col-2">
                  <div>
                    <Form.Item name="total-acc">
                      <FloatInput
                        label="Credit lines"
                        placeholder="Credit lines"
                        name="total-acc"
                      />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item name="initial-list-status">
                      <FloatInput
                        label="Initial list status"
                        placeholder="Initial list status"
                        name="initial-list-status"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="grid-sub-col-2">
                  <div>
                    <Form.Item name="home-ownership">
                      <Select name="home_ownership">
                        {[36, 60].map((ownership) => (
                          <Option value={ownership}>{ownership}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item name="loan_status">
                      <FloatInput
                        label="Loan Status"
                        placeholder="Loan Status"
                        name="loan_status"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="grid-sub-col-2">
                  <div>
                    <Form.Item name="revol_bal">
                      <FloatInput
                        label="Revolving balance"
                        placeholder="Revolving balance"
                        name="revol_bal"
                      />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item name="revol_util">
                      <FloatInput
                        label="Revolving utilization"
                        placeholder="Revolving utilization"
                        name="revol_util"
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <StyledButton>Predict</StyledButton>
        </StyledForm>
      </DragDrop>
    </Content>
  );
}
