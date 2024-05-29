# AWS Sagemaker Machine Learning
## Introduction
> Maintainer: <brandi_coleman@bmc.com>

The On-Demand Demo Service for this flow takes approximately 7 minutes to complete.

See <b>Usage Instructions</b> below for steps to interact with this flow.

## Use Case Overview 
The AWS Sagemaker Machine Learning use case was created to demonstrate Control-M's ability to integrate with common Machine Learning tools like Sagemaker as well as orchestrate the common Machine Learning processes like sourcing data from enterprise data lakes, data extracts, and more. For details on the use case covered in this demo please visit [Amazon SageMaker Processing Jobs](https://sagemaker-examples.readthedocs.io/en/latest/sagemaker_processing/scikit_learn_data_processing_and_model_evaluation/scikit_learn_data_processing_and_model_evaluation.html). 

![](../images/awssagemaker.JPG)


## Use Case Technical Discussion
Each step in the workflow has a detailed description which will be summarized here as well. The first job in this workflow will source data from an enterprise data lake (S3) via a file transfer to the local containerized agent. This data consists of cenus_income data which undergoes an extraction using the python pandas class in an OS Command job type. This extracted data is then temporarily transferred by to S3 to await pre-processing. The extracted data set (dataset.csv), is leveraged as input to the Sagemaker pre-processing job which runs a scikit-learn script that cleans, pre-processes, performs feature engineering, and splits the input data into train and test sets. These datasets are used as input to the Sagemaker training job which retrains a logistic regression model. The output is the model.tar.gz file that can found in the output S3 bucket. The model performance is then evaluated with a Sagemaker post-processing job, and the model report is downloaded (via a file transfer) and emailed via an On-Do Action.

To view the demo flow code-base please navigate to the [AWS Sagemaker Machine Learning Git Repository](https://ctm-git.trybmc.com/automated-demos/aws-sagemaker-machine-learning)


This use case can also be demoed via the Control-M Python client. The python notebook code for this demo is available [here](https://ctm-git.trybmc.com/automated-demos/aws-sagemaker-machine-learning/-/blob/master/python-notebook/aws-sagemaker-machine-learning.ipynb)

## Job Types Included  
- File Transfer (S3)
- AWS Sagemaker
- OS (Python execution)
- SLA Management

## Screenshot of Demo Flow

![](../images/sagemaker.JPG)