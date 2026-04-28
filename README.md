# Specs
AWS and learnings


# to run nightly job from codebuild
1. Create a ./buildspec.yml file 
2. Create a AWS Codebuild project: playwright-nightly-tests
2. Create a s3 bucket to upload the playwright test runs report else it is lost after test run : playwright-reports-ra1
3. add code in ./buildspec.yml:
    3.1 # Upload HTML report to S3 (recommended)
    3.2 # Build report URL
4. Setup slack webhook to receive messages in #slack
5. Use Amazon EventBridge (cron scheduler) to trigger CodeBuild.


<!-- Notes:
Codebuild project name: playwright-nightly-tests
Service role: codebuild-pw-nightly-tests-service-role-ra1
in AWS, Artifcats-- name should be same as $REPORT_DIR in buildspec.yml (here: playwright-report-nightly)
s3 bucket name: playwright-reports-ra1 -->

# setup slack codebuild integration
1. create a webhook in slack, add new slack channel
2. add webhook url to aws secets manager
3. Create a policy and add it to service role
4. add env variable in codebuild project
5. update buildspec.yml
6. commit once and run the build from AWS


# Services used:
1. Codebuild
2. IAM
3. Secrets manager
4. S3
5. Cloudwatch
6. Amamzon EventBridge


# Learnings :
1. Create Codebuild project, service role, Build the project
2. AWS secret manager to store secrets, do not use Github
3. S3 buckets to store reports
4. Amazon EventBridge to schedule cron job
5. IAM: to create service role and policy
6. Cloudwatch: View logs 
7. Access denied error in Github:

Solution:
1. Setup policy in service role for Codebuild--GitHub integration


8. Did not see Pass/Fail tests count in cloudwatch logs

Solution:
1. added debugging
2. installed jq


9. Did not receive report link and pass/fail status in slack

Solution:
1. Added the Env variable in codebuild project in the right way
2. Webhook was missing in slack, created it


10. Cannot view report vis slack link:

Solution: 
1. Public access for S3 bucket was locked, unlocked it
2. Added Access Control list (ACL) in S3--Permissions tab to allow public access to files(obkjects)
