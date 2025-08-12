---
title: AWS Certified Solutions Architect Associate (SAA) Exam preparation
description: how to perpare AWS Certified Solutions Architect Associate (SAA) Exam
---

# Reference
[Ultimate AWS Certified Solutions Architect Associate (SAA) | Udemy](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/)  
[AWS Certified Solutions Architect – Associate Certification](https://aws.amazon.com/certification/certified-solutions-architect-associate/)  
[AWS-Certified-Solutions-Architect-Associate\_Exam-Guide.pdf](https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS-Certified-Solutions-Architect-Associate_Exam-Guide.pdf)  
[AWS-Certified-Solutions-Architect-Associate\_Sample-Questions.pdf](https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS-Certified-Solutions-Architect-Associate_Sample-Questions.pdf)  
[GitHub - GreenH47/AWS\_certified: AWS certified exam preparation](https://github.com/GreenH47/AWS_certified)  
[AWS Certified Solutions Architect Associate Exam - SAA-C03 Study Path](https://tutorialsdojo.com/aws-certified-solutions-architect-associate-saa-c03/)  
# Exam Guide 
[AWS-Certified-Solutions-Architect-Associate\_Exam-Guide.pdf](https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS-Certified-Solutions-Architect-Associate_Exam-Guide.pdf)  
There are two types of questions on the exam:  
• Multiple choice: Has one correct response and three incorrect responses (distractors)  
• Multiple response: Has two or more correct responses out of five or more response options  

## Domain of Exam  
1. Domain 1: Design Secure Architectures 30%   Design secure access to AWS resources Design secure workloads and applications Determine appropriate data security controls 设计对 AWS 资源的安全访问 ๏ 设计安全的工作负载和应用程序 ๏ 确定适当的数据安全控制 (AWS Identity and Access Management [IAM], AWS Regions, Control ports, protocols, and network traffic, Amazon Cognito, VPC architecture, subnetwork segmentation, Data access and governance)  
2. Domain 2: Design Resilient Architectures 26%  Design scalable and loosely coupled architecture Design highly available and/or fault-tolerant architectures 设计可扩展且松散耦合的架构 ๏ 设计高可用性和/或容错架构 (API creation and management, )  
3. Domain 3: Design High-Performing Architectures 24%   Determine high-performing and/or scalable storage solutions Design high-performing and elastic compute solutions Determine high-performing database solutions Determine high-performing and/or scalable network architectures Determine high-performing data ingestion and transformation solutions 确定高性能和/或可扩展存储解决方案 ๏ 设计高性能和弹性计算解决方案 ๏ 确定高性能数据库解决方案 ๏ 确定高性能和/或可扩展网络架构 ๏ 确定高性能数据摄取和转换解决方案  
4. Domain 4: Design Cost-Optimized Architectures 20%  Design cost-optimized storage solutions Design cost-optimized compute solutions Design cost-optimized database solutions Design cost-optimized network architectures 设计成本优化的存储解决方案 ๏ 设计成本优化的计算解决方案 ๏ 设计成本优化的数据库解决方案 ๏ 设计成本优化的网络架构

# IAM
IAM = Identity and Access Management, Global service IAM = 身份和访问管理、全球服务  
Users or Groups can be assigned JSON documents called policies In AWS you apply the least  privilege principle: don’t give more permissions than a user needs 在 AWS 中，您应用最小权限原则：不要授予超出用户需要的权限  
## IAM Policies Structure
![saa c03 20230712](https://s3.greenhuang.com/docs/saa_c03-20230712.png)  
• Users: mapped to a physical user, has a password for AWS Console  
• Groups: contains users only  
• Policies: JSON document that outlines permissions for users or groups  
• Roles: for EC2 instances or AWS services  
• Security: MFA + Password Policy  
• AWS CLI: manage your AWS services using the command-line  
• AWS SDK: manage your AWS services using a programming language  
• Access Keys: access AWS using the CLI or SDK  
• Audit: IAM Credential Reports & IAM Access Advisor  

# EC2 Elastic Compute Cloud
EC2 = Elastic Compute Cloud = Infrastructure as a Service It mainly consists in the capability of :  EC2 = 弹性计算云 = 基础设施即服务 • 它主要包括以下功能：
• Renting virtual machines租用虚拟机 (EC2)  
• Storing data on virtual drives在虚拟驱动器上存储数据 (EBS)  
• Distributing load across machines跨机器分配负载 (ELB)  
• Scaling the services using an auto-scaling group使用自动缩放组缩放服务 (ASG)  

[Compute – Amazon EC2 Instance Types – AWS](https://aws.amazon.com/ec2/instance-types/)  

## Security Groups
Inbound and Outbound Rules: Security groups enable you to define rules to control inbound traffic (incoming connections) and outbound traffic (outgoing connections) for your EC2 instances. Each rule specifies a protocol, port range, and source or destination IP addresses. 入站和出站规则：安全组使您能够定义规则来控制 EC2 实例的入站流量（传入连接）和出站流量（传出连接）。每个规则指定协议、端口范围以及源或目标 IP 地址。 
22 = SSH (Secure Shell) - log into a Linux instance
• 21 = FTP (File Transfer Protocol) – upload files into a file share
• 22 = SFTP (Secure File Transfer Protocol) – upload files using SSH
• 80 = HTTP – access unsecured websites
• 443 = HTTPS – access secured websites
• 3389 = RDP (Remote Desktop Protocol) – log into a Windows instance  
The rules are evaluated in a sequential manner. If a rule matches the incoming network traffic, then the action specified in that rule (e.g., allow or deny) will be applied. If no rule matches, the traffic will be denied by default.  规则按顺序进行评估。如果规则与传入的网络流量匹配，则将应用该规则中指定的操作（例如，允许或拒绝）。如果没有匹配的规则，则默认情况下将拒绝流量。 

## Placement Groups
In AWS, a Placement Group is a logical grouping of EC2 instances within a single Availability Zone. It allows you to influence the placement of instances to provide better performance or isolation.  在 AWS 中，置放群组是单个可用区内 EC2 实例的逻辑分组。它允许您影响实例的位置，以提供更好的性能或隔离  
There are three types of Placement Groups:  
归置组有三种类型：

1. Cluster Placement Group: This type is designed for applications that require low network latency and high network throughput. Instances in a cluster placement group are placed close to each other within a single rack, which enables high-bandwidth, low-latency communication between them. This type is suitable for applications like HPC (High-Performance Computing) workloads or big data analytics.  
    集群置放群组：此类型专为需要低网络延迟和高网络吞吐量的应用程序而设计。集群置放群组中的实例彼此靠近放置在单个机架内，从而实现它们之间的高带宽、低延迟通信。此类型适用于 HPC（高性能计算）工作负载或大数据分析等应用程序。
    
2. Spread Placement Group: This type is used to spread instances across distinct underlying hardware to minimize the impact of hardware failures on the availability of your application. Instances in a spread placement group are placed on different racks, ensuring that they are physically isolated for greater fault tolerance. This type is suitable for critical applications that require high availability.  
    分散置放群组：此类型用于将实例分散到不同的底层硬件上，以最大程度地减少硬件故障对应用程序可用性的影响。分散置放组中的实例放置在不同的机架上，确保它们在物理上隔离，以提高容错能力。此类型适用于需要高可用性的关键应用程序。
    
3. Partition Placement Group: This type enables you to spread your instances across logical partitions (up to seven) within a single Availability Zone. Each partition behaves as an independent rack with its own network and power source. This type is useful when you need to maximize fault tolerance by isolating instances from each other at the hardware level.  
    分区置放群组：此类型使您能够将实例分布在单个可用区内的逻辑分区（最多 7 个）。每个分区都表现为一个独立的机架，具有自己的网络和电源。当您需要通过在硬件级别将实例彼此隔离来最大化容错能力时，此类型非常有用。

## Elastic Network Interface (ENI)
[New – Elastic Network Interfaces in the Virtual Private Cloud | AWS News Blog](https://aws.amazon.com/blogs/aws/new-elastic-network-interfaces-in-the-virtual-private-cloud/)  
In AWS, an Elastic Network Interface (ENI) is a virtual network interface that you can attach to an EC2 instance. It provides networking capabilities to the instance, allowing it to communicate with other resources within your VPC (Virtual Private Cloud) or across the internet.  
在 AWS 中，弹性网络接口 （ENI） 是可以附加到 EC2 实例的虚拟网络接口。它为实例提供联网功能，使其能够与 VPC（虚拟私有云）内的其他资源或通过互联网进行通信  
Elastic Network Interfaces provide flexibility, high availability, advanced networking capabilities, and security features to your EC2 instances. They allow you to customize and optimize networking setups for your specific application requirements, providing greater control and performance.  
总体而言，弹性网络接口为您的 EC2 实例提供了灵活性、高可用性、高级联网功能和安全功能。它们允许您根据特定应用要求自定义和优化网络设置，从而提供更好的控制和性能。 

1. Multiple ENIs per Instance: You can attach multiple ENIs to an EC2 instance. Each ENI can have its own private IP address, security group rules, and elastic IP addresses. This allows you to configure different network interfaces for specific use cases or network configurations.  
    每个实例多个 ENI：您可以将多个 ENI 附加到一个 EC2 实例。每个弹性网卡都可以有自己的内网IP地址、安全组规则和弹性公网IP。这允许您为特定用例或网络配置配置不同的网络接口。
    
2. High Availability and Failover: ENIs can be associated with multiple subnets within a VPC and can be easily moved between instances using an Elastic IP address (EIP). This provides high availability and failover capabilities for your applications in case of instance failure.  
    高可用性和故障转移：弹性网卡可以与 VPC 内的多个子网关联，并且可以使用弹性 IP 地址 （EIP） 在实例之间轻松移动。这为您的应用程序提供了高可用性和故障转移功能，以防实例发生故障

## EBS Elastic Block Store(like usb disk)
In AWS, EBS stands for Elastic Block Store, and it is a scalable block storage service designed for use with EC2 instances. EBS provides persistent storage that can be attached to EC2 instances as virtual disks, similar to a hard drive.  
在 AWS 中，EBS 代表弹性块存储，它是一种可扩展的块存储服务，旨在与 EC2 实例一起使用。EBS 提供持久存储，可作为虚拟磁盘附加到 EC2 实例，类似于硬盘驱动器。  

## EBS Snapshots
In AWS, EBS snapshots are a mechanism for backing up and recovering data from EBS volumes. An EBS snapshot is a point-in-time copy of an EBS volume, capturing its contents including data, configurations, and metadata 在 AWS 中，EBS 快照是一种从 EBS 卷备份和恢复数据的机制。EBS 快照是 EBS 卷的时间点副本，可捕获其内容，包括数据、配置和元数据。  
EBS snapshots provide a cost-effective and efficient method to back up your data stored on EBS volumes in AWS. They offer data recovery options, replication for disaster recovery, and encryption for securing sensitive information. By leveraging EBS snapshots, you can achieve better data protection and enhance the resilience of your applications and services.  
EBS 快照提供了一种经济高效的方式来备份存储在 AWS 中的 EBS 卷上的数据。它们提供数据恢复选项、用于灾难恢复的复制以及用于保护敏感信息的加密。通过利用 EBS 快照，您可以实现更好的数据保护并增强应用程序和服务的弹性。  

## AMI = Amazon Machine Image  
AMI are a customization of an EC2 instance  
• You add your own software, configuration, operating system, monitoring...  
• Faster boot / configuration time because all your software is pre-packaged  
AMI 是 EC2 实例的定制 • 您添加自己的软件、配置、操作系统、监控... • 由于所有软件均已预先打包，因此启动/配置时间更快

## Multi-Attach
Attach the same EBS volume to multiple EC2  instances in the same AZ  Each instance has full read & write permissions to the high-performance volume 将相同的 EBS 卷附加到同一可用区中的多个 EC2 实例 • 每个实例都对高性能卷具有完整的读写权限 Up to 16 EC2 Instances at a time 一次最多 16 个 EC2 实例  

## EFS – Elastic File System  
AWS EFS (Amazon Elastic File System) is a fully managed, scalable, and highly available file storage service provided by Amazon Web Services (AWS). It is designed to provide shared file storage for EC2 instances and other AWS services.  AWS EFS（Amazon Elastic File System）是由 Amazon Web Services （AWS） 提供的完全托管、可扩展且高度可用的文件存储服务。它旨在为 EC2 实例和其他 AWS 服务提供共享文件存储。 
The main function of AWS EFS is to provide a fully managed and scalable file system that can be accessed from multiple EC2 instances concurrently. It allows multiple instances to read and write data to the file system concurrently, making it suitable for use cases that require shared access to data.  AWS EFS 的主要功能是提供可从多个 EC2 实例同时访问的完全托管且可扩展的文件系统。它允许多个实例同时向文件系统读取和写入数据，使其适用于需要共享数据访问的使用案例。

## comparison between EBS and EFS  

| Feature 特征         | EBS (Elastic Block Store)  <br>EBS（弹性块存储）                        | EFS (Elastic File System)  <br>EFS（弹性文件系统）                                |
| ------------------ | ---------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Storage Type 存储类型  | Block-level storage 块级存储                                         | File-level storage 文件级存储                                                  |
| Access Method      | Mounted as block devices to EC2 instances  <br>作为块储存设备挂载到 EC2 实例 | Accessed via NFS protocol  <br>通过 NFS 协议访问                                |
| Shared Access 共享访问 | Not designed for shared access  <br>不是为共享访问而设计的                  | Multiple instances can access concurrently  <br>多个实例可以同时访问                |
| Use Cases 使用案例     | Boot volumes, database storage, etc.  <br>引导卷、数据库存储等             | Shared web hosting, content management systems, etc.  <br>共享虚拟主机、内容管理系统等。 |
| Scalability 可扩展性   | Resizable but may require downtime  <br>可调整大小，但可能需要停机            | Automatically scales without downtime  <br>自动扩展，无需停机                      |
| Availability 可用性   | Redundancy within single availability zone  <br>单个可用区内的冗余        | Replication across multiple availability zones  <br>跨多个可用区进行复制            |
| Durability 耐久性     | Snapshots and replication for backups  <br>用于备份的快照和复制            | Replication for high durability  <br>复制以实现高持久性                            |
![saa c03 20230722](https://s3.greenhuang.com/docs/saa_c03-20230722.png)  
![saa c03 20230722 1](https://s3.greenhuang.com/docs/saa_c03-20230722-1.png)  
## comparison between efs and s3

|Criteria 标准|Amazon S3 亚马逊 S3|Amazon EFS 亚马逊 EFS|
|---|---|---|
|Storage Type 存储类型|Object 对象|File System 文件系统|
|Durability and Availability  <br>耐用性和可用性|Highly durable and available  <br>高度耐用且可用|Highly durable and available  <br>高度耐用且可用|
|Access Interface 访问接口|RESTful API RESTful API|NFSv4 file system interface  <br>NFSv4 文件系统接口|
|Concurrency 并发|Not suitable for concurrent file access  <br>不适合并发文件访问|Supports concurrent file access by multiple instances/containers  <br>支持多个实例/容器并发访问文件|
|Latency and Performance 延迟和性能|Object-level operations with variable latency  <br>具有可变延迟的对象级操作|Low-latency file operations  <br>低延迟文件操作|
|Cost-Effectiveness 成本效益|Offers specialized storage classes for cost-effective long-term storage (Standard, IA, Glacier)  <br>为经济高效的长期存储提供专门的存储类别（标准、IA、冰川）|Pricing based on storage consumption and throughput (per GB)  <br>基于存储消耗和吞吐量的定价（每 GB）|
|Use Cases 使用案例|Object storage, data archiving, backups, data lakes  <br>对象存储、数据归档、备份、数据湖|Shared file system, content management, web serving  <br>共享文件系统、内容管理、Web 服务|
## efs vs ebs vs s3
[Amazon S3 vs EBS vs EFS](https://tutorialsdojo.com/amazon-s3-vs-ebs-vs-efs/)  
![](https://s3.greenhuang.com/docs/saa_c03-20230818-1.png)
# Scalability & High Availability
## Scalability
Scalability in AWS refers to the ability of a system or application to handle an increasing workload by adding or removing resources as needed. AWS provides various services and features that enable organizations to scale their infrastructure and applications as their demand grows.  
AWS 中的可扩展性是指系统或应用程序通过根据需要添加或删除资源来处理不断增加的工作负载的能力。AWS 提供各种服务和功能，使组织能够随着需求的增长扩展其基础设施和应用程序。

There are two main types of scalability in AWS:  
AWS 中有两种主要类型的可扩展性：

1. Vertical Scalability: Also known as scaling up, this type of scalability involves increasing the capacity of a single resource, such as upgrading a server with a higher CPU or more memory. AWS allows users to vertically scale their instances by choosing different sizes or families of EC2 instances.  
    垂直可伸缩性：也称为纵向扩展，这种类型的可伸缩性涉及增加单个资源的容量，例如升级具有更高 CPU 或更多内存的服务器。AWS 允许用户通过选择不同大小或系列的 EC2 实例来垂直扩展其实例。
    
2. Horizontal Scalability: Also known as scaling out, this type of scalability involves adding more instances or resources in a distributed manner to handle increased workload. AWS provides services like Auto Scaling, which automatically adds or removes EC2 instances based on predefined rules, ensuring the application scales horizontally as demand fluctuates.  
    水平可伸缩性：也称为横向扩展，这种类型的可伸缩性涉及以分布式方式添加更多实例或资源以处理增加的工作负载。AWS 提供 Auto Scaling 等服务，该服务可根据预定义的规则自动添加或删除 EC2 实例，确保应用程序随着需求的波动而水平扩展。

## High Availability
High Availability in AWS refers to the ability of a system or application to remain accessible and operational for a long period of time without any significant downtime or interruptions. It is a critical aspect of ensuring continuous availability and reliability of services in AWS.  
AWS 中的高可用性是指系统或应用程序能够长时间保持可访问和运行，而不会造成任何重大停机或中断。这是确保 AWS 中服务的持续可用性和可靠性的一个关键方面。  

## ELB-Elastic Load Balancer 
Load balancing in AWS is the process of distributing incoming network traffic across multiple resources, such as EC2 instances, containers, or IP addresses, to ensure optimum utilization of resources, improve performance, and enhance reliability of applications.  
AWS 中的负载均衡是跨多个资源（如 EC2 实例、容器或 IP 地址）分配传入网络流量的过程，以确保资源的最佳利用、提高性能并增强应用程序的可靠性
Elastic Load Balancer (ELB) is a managed load balancing service provided by AWS that helps distribute incoming network traffic across multiple resources, such as EC2 instances, containers, or IP addresses. ELB automatically scales its capacity to handle the fluctuating traffic load and enhances the availability and fault tolerance of applications.  
弹性负载均衡器 （ELB） 是 AWS 提供的一项托管负载均衡服务，可帮助跨多个资源（例如 EC2 实例、容器或 IP 地址）分配传入的网络流量。ELB 自动扩展其容量以处理波动的流量负载，并增强应用程序的可用性和容错能力。 
Elastic Load Balancers help improve the availability, scalability, and fault tolerance of applications by distributing traffic across multiple resources, monitoring health checks for these resources, and automatically routing traffic to healthy instances. By utilizing ELB, you can ensure that your applications are able to handle increased traffic, provide better performance, and offer a seamless user experience.  
弹性负载均衡器通过在多个资源之间分配流量、监控这些资源的运行状况检查以及自动将流量路由到运行状况良好的实例来帮助提高应用程序的可用性、可扩展性和容错能力。通过使用 ELB，您可以确保您的应用程序能够处理增加的流量、提供更好的性能并提供无缝的用户体验。
![saa c03 20230722 2](https://s3.greenhuang.com/docs/saa_c03-20230722-2.png)  
![saa c03 20230722 5](https://s3.greenhuang.com/docs/saa_c03-20230722-5.png)
## ALB-Application Load Balancer
Application Load Balancer (ALB) is a type of Elastic Load Balancer (ELB) provided by AWS. It operates at Layer 7 (the application layer) of the OSI model, making it capable of distributing incoming traffic to different targets based on specific rules and conditions.  
当然！应用程序负载均衡器 （ALB） 是 AWS 提供的一种弹性负载均衡器 （ELB）。它在 OSI 模型的第 7 层（应用层）运行，使其能够根据特定规则和条件将传入流量分配到不同的目标。
1. Advanced routing: ALB supports advanced routing capabilities, allowing you to route traffic to different targets based on URL paths, hostname, or specific request headers.  
    高级路由：ALB 支持高级路由功能，允许您根据 URL 路径、主机名或特定请求标头将流量路由到不同的目标。
    
2. Content-based routing: ALB can distribute traffic based on the content of the request, enabling you to create dynamic routing decisions for different request types.  
    基于内容的路由：ALB可以根据请求的内容分配流量，使您能够为不同的请求类型创建动态路由决策。

![saa c03 20230722 3](https://s3.greenhuang.com/docs/saa_c03-20230722-3.png)
### ALB Target Groups
![saa c03 20230722 4](https://s3.greenhuang.com/docs/saa_c03-20230722-4.png)

## NLB - Network Load Balance
Network load balancers (Layer 4) allow to:  • Forward TCP & UDP traffic to your instances • Handle millions of request per seconds • Less latency ~100 ms (vs 400 ms for ALB) 网络负载均衡器（第 4 层）允许： • 将 TCP 和 UDP 流量转发到您的实例 • 每秒处理数百万个请求 • 延迟减少约 100 毫秒（ALB 为 400 毫秒）  
![saa c03 20230723](https://s3.greenhuang.com/docs/saa_c03-20230723.png)  
## GWLB - Gateway Load Balancer
Gateway Load Balancer is designed to provide scalable and highly available load balancing for network traffic at the edge of your AWS infrastructure. It is primarily focused on load balancing traffic between your virtual appliances (e.g., firewalls, intrusion detection systems, and other security devices) and your VPC (Virtual Private Cloud) resources.  
网关负载均衡器旨在为 AWS 基础设施边缘的网络流量提供可扩展且高度可用的负载均衡。它主要侧重于虚拟设备（例如防火墙、入侵检测系统和其他安全设备）与 VPC（虚拟私有云）资源之间的流量负载平衡。 

## Load balancer compare
![](https://s3.greenhuang.com/docs/saa_c03-20230818-2.png)
## Sticky Sessions
Sticky sessions, also known as session affinity or session persistence, is a feature provided by load balancers in AWS to ensure that subsequent requests from a client are directed to the same backend server or instance that served the initial request. It allows the load balancer to maintain a consistent session between the client and the backend server.  
粘性会话（也称为会话亲和性或会话持久性）是 AWS 中的负载均衡器提供的一项功能，用于确保来自客户端的后续请求定向到为初始请求提供服务的同一后端服务器或实例。它允许负载均衡器在客户端和后端服务器之间保持一致的会话  
The connection draining feature is especially important in situations where terminating connections abruptly could result in lost data or client errors. By allowing in-flight requests to complete gracefully, connection draining ensures a seamless transition for clients and improves the availability and stability of your applications during scaling events or instance removals.  
在突然终止连接可能导致数据丢失或客户端错误的情况下，连接耗尽功能尤其重要。通过允许正常完成正在进行的请求，连接排出可确保客户端的无缝转换，并在扩展事件或实例删除期间提高应用程序的可用性和稳定性。

It's worth noting that connection draining is supported by the Classic Load Balancer (CLB) and the Application Load Balancer (ALB) in AWS. You can enable and configure connection draining settings according to your specific application requirements.  
值得注意的是，AWS 中的传统负载均衡器 （CLB） 和应用程序负载均衡器 （ALB） 支持连接耗尽。您可以根据特定的应用程序要求启用和配置连接排出设置。
## ASG- Auto Scaling Group
The goal of an Auto Scaling Group (ASG) is to:  
• Scale out (add EC2 instances) to match an increased load  
• Scale in (remove EC2 instances) to match a decreased load  
• Ensure we have a minimum and a maximum number of EC2 instances running  
• Automatically register new instances to a load balancer  
• Re-create an EC2 instance in case a previous one is terminated (ex: if unhealthy  
Auto Scaling 组 (ASG) 的目标是： • 横向扩展（添加 EC2 实例）以匹配增加的负载 • 缩减（删除 EC2 实例）以匹配减少的负载 • 确保运行的 EC2 实例数量达到最小和最大数量 • 自动向负载均衡器注册新实例 • 重新创建 EC2 实例，以防前一个实例终止（例如：运行状况不佳）
![saa c03 20230723 1](https://s3.greenhuang.com/docs/saa_c03-20230723-1.png)  

# Amazon RDS
Amazon RDS (Relational Database Service) is a managed database service provided by Amazon Web Services (AWS). It makes it easy to set up, operate, and scale relational databases in the cloud.  
Amazon RDS（关系数据库服务）是由 Amazon Web Services （AWS） 提供的托管数据库服务。它使在云中设置、操作和扩展关系数据库变得容易。

With Amazon RDS, you can deploy and manage popular relational database engines such as Amazon Aurora, MySQL, PostgreSQL, Oracle Database, and Microsoft SQL Server, without the need to manage underlying database infrastructure. Key features and benefits of Amazon RDS include:  
借助 Amazon RDS，您可以部署和管理流行的关系数据库引擎，例如 Amazon Aurora、MySQL、PostgreSQL、Oracle Database 和 Microsoft SQL Server，而无需管理底层数据库基础设施。Amazon RDS 的主要功能和优势包括：
## Auto Scaling
Amazon RDS Auto Scaling works by monitoring the performance metrics of your RDS instances, such as CPU utilization, database connections, or storage usage. Based on your defined scaling policies, it can automatically scale the number of read replicas or increase/decrease the instance size (vertical scaling) to meet the application's performance requirements.  
Amazon RDS Auto Scaling 的工作原理是监控 RDS 实例的性能指标，例如 CPU 利用率、数据库连接或存储使用情况。根据您定义的扩展策略，它可以自动扩展只读副本数量或增加/减少实例大小（垂直扩展）以满足应用程序的性能要求  
## Read Replicas
Read Replicas: Apart from Multi-AZ deployments, RDS also supports creating Read Replicas. Read Replicas are additional instances that replicate data from the primary database in an asynchronous manner. Read Replicas can be created in different AZs to distribute read traffic and improve performance. However, note that Read Replicas are not automatically promoted to a primary database in case of a failure like Multi-AZ deployments.
只读副本：除了多可用区部署外，RDS 还支持创建只读副本。只读副本是以异步方式从主数据库复制数据的附加实例。可以在不同的可用区中创建只读副本，以分配读取流量并提高性能。但是，请注意，如果发生多可用区部署等故障，只读副本不会自动提升为主数据库。
![saa c03 20230724](https://s3.greenhuang.com/docs/saa_c03-20230724.png)
![](https://s3.greenhuang.com/docs/saa_c03-20230817-1.png)
## From Single-AZ to Multi-AZ
Create a new Multi-AZ RDS instance: From the Amazon RDS console, choose "Launch DB instance". Select the desired database engine, version, and instance specifications. In the "Multi-AZ deployment" section, choose the option to enable Multi-AZ. Configure other settings as per your requirements and launch the new Multi-AZ instance.
创建新的多可用区 RDS 实例：从 Amazon RDS 控制台中选择“启动数据库实例”。选择所需的数据库引擎、版本和实例规格。在“多可用区部署”部分中，选择启用多可用区的选项。根据您的要求配置其他设置并启动新的多可用区实例

## Amazon Aurora
Aurora is a proprietary technology from AWS (not open sourced)• Postgres and MySQL are both supported as Aurora DB (that means your drivers will work as if Aurora was a Postgres or MySQL database) • Aurora is “AWS cloud optimized” and claims 5x performance improvement over MySQL on RDS, over 3x the performance of Postgres on RDS Aurora 是 AWS 的专有技术（非开源） • Postgres 和 MySQL 都作为 Aurora DB 支持（这意味着您的驱动程序将像 Aurora 是 Postgres 或 MySQL 数据库一样工作） • Aurora 是“AWS 云优化”，并声称比 RDS 上的 MySQL 性能提高了 5 倍，是 RDS 上的 Postgres 性能的 3 倍以上  

## Amazon RDS Proxy
Fully managed database proxy for RDS• Allows apps to pool and share DB connections established with the database • Improving database efficiency by reducing the stress on database resources (e.g., CPU, RAM) and minimize open connections (and timeouts) • Serverless, autoscaling, highly available (multi-AZ)  
RDS 的完全托管数据库代理 • 允许应用程序汇集和共享与数据库建立的数据库连接 • 通过减少数据库资源（例如 CPU、RAM）的压力并最大限度地减少开放连接（和超时）来提高数据库效率 • 无服务器、自动扩展、高可用性（多可用区）

## ElastiCache
![saa c03 20230724 1](https://s3.greenhuang.com/docs/saa_c03-20230724-1.png)
![saa c03 20230724 2](https://s3.greenhuang.com/docs/saa_c03-20230724-2.png)
Yes, that's correct! When a user makes a read or update request, AWS can utilize the data stored in ElastiCache, if available, to serve the request faster and reduce the load on the underlying main database.  
是的，没错！当用户发出读取或更新请求时，AWS 可以利用存储在 ElastiCache 中的数据（如果可用）更快地为请求提供服务，并减少底层主数据库的负载。

Here's a general flow of how this caching process works with ElastiCache:  
以下是此缓存过程如何与 ElastiCache 配合使用的一般流程：

1. Read Request: 读取请求：
    
    - When a read request is received, the application first checks if the requested data is available in the ElastiCache cache.  
        收到读取请求后，应用程序首先检查请求的数据在 ElastiCache 缓存中是否可用。
    - If the data is present in the cache, it can be directly retrieved from ElastiCache, which provides low-latency access to the data. This eliminates the need to query the main database.  
        如果数据存在于缓存中，则可以直接从 ElastiCache 中检索数据，从而提供对数据的低延迟访问。这样就无需查询主数据库。
    - If the data is not available in the cache, the application retrieves it from the main database and stores it in the cache for subsequent requests.  
        如果数据在缓存中不可用，应用程序将从主数据库中检索数据并将其存储在缓存中以供后续请求使用。
2. Update Request: 更新请求：
    
    - When an update request is received, the application updates both the data in the cache and the main database to maintain consistency.  
        收到更新请求时，应用程序会更新缓存中的数据和主数据库中的数据以保持一致性。
    - The application first updates the data in the main database to ensure durability and data integrity.  
        应用程序首先更新主数据库中的数据，以确保持久性和数据完整性。
    - After the update, the application also updates the corresponding data in the ElastiCache cache or invalidates the cached entry, depending on the caching strategy being used.  
        更新后，应用程序还会更新 ElastiCache 缓存中的相应数据或使缓存的条目失效，具体取决于所使用的缓存策略。
    - On subsequent read requests, the updated data will be retrieved from the main database and cached in ElastiCache again, ensuring that the data in the cache stays up to date.  
        在随后的读取请求中，将从主数据库中检索更新的数据并再次缓存在 ElastiCache 中，从而确保缓存中的数据保持最新。

This caching mechanism helps alleviate the load on the main database by reducing the number of queries or computations required to serve read and update requests. By storing frequently accessed or computationally expensive data in the cache, applications can significantly improve response times and achieve better scalability.  
此缓存机制通过减少为读取和更新请求提供服务所需的查询或计算数来帮助减轻主数据库上的负载。通过在缓存中存储频繁访问或计算成本高昂的数据，应用程序可以显著缩短响应时间并实现更好的可伸缩性。

It's worth mentioning that the caching strategy and configuration may vary depending on the specific use case and requirements of your application. ElastiCache offers different caching strategies, such as Lazy Loading and Write-Through, which allow you to control how data is stored, retrieved, and synchronized between the cache and the main database.  
值得一提的是，缓存策略和配置可能会有所不同，具体取决于应用程序的特定用例和要求。ElastiCache 提供了不同的缓存策略，例如延迟加载和直写，它们允许您控制缓存和主数据库之间的数据存储、检索和同步方式。

By employing ElastiCache as a caching layer, you can optimize the performance of your application while maintaining consistency and data integrity across the cache and the main database.  
通过使用 ElastiCache 作为缓存层，您可以优化应用程序的性能，同时保持缓存和主数据库的一致性和数据完整性。

# Route 53
## DNS
Domain Name System which translates the human friendly hostnames into the machine IP addresses• www.google.com => 172.217.18.36 • DNS is the backbone of the Internet • DNS uses hierarchical naming structure 域名系统，将人类友好的主机名转换为机器 IP 地址 • www.google.com => 172.217.18.36 • DNS 是互联网的支柱 • DNS 使用分层命名结构  
  
Domain Registrar: Amazon Route 53, GoDaddy, ...  
• DNS Records: A, AAAA, CNAME, NS, ...  
• Zone File: contains DNS records  
• Name Server: resolves DNS queries (Authoritative or Non-Authoritative)  
• Top Level Domain (TLD): .com, .us, .in, .gov, .org, ...  
• Second Level Domain (SLD): amazon.com, google.com
![saa c03 20230724 3](https://s3.greenhuang.com/docs/saa_c03-20230724-3.png)  
![saa c03 20230724 4](https://s3.greenhuang.com/docs/saa_c03-20230724-4.png)  
## Amazon Route 53
Route 53 offers a reliable and scalable DNS infrastructure that is essential for modern web applications and services. It is widely used for domain management, DNS routing, and traffic distribution, ensuring high availability, performance, and security for your applications and websites.  
Route 53 提供可靠且可扩展的 DNS 基础设施，这对于现代 Web 应用程序和服务至关重要。它广泛用于域管理、DNS 路由和流量分发，确保您的应用程序和网站的高可用性、高性能和安全性。
## Hosted Zones
A container for records that define how to route traffic to a domain and its subdomains  
• Public Hosted Zones – contains records that specify how to route traffic on the Internet (public domain names) application1.mypublicdomain.com  
• Private Hosted Zones – contain records that specify how you route traffic within one or more VPCs (private domain names) application1.company.interna  
定义如何将流量路由到域及其子域的记录容器 • 公共托管区域 – 包含指定如何在 Internet（公共域名）application1.mypublicdomain.com 上路由流量的记录 • 私有托管区域 – 包含指定如何在一个或多个 VPC（私有域名）application1.company.interna 内路由流量的记录  
![saa c03 20230724 5](https://s3.greenhuang.com/docs/saa_c03-20230724-5.png)  
## Alias Records

# Solutions Architecture
[Reference Architecture Examples and Best Practices](https://aws.amazon.com/architecture/)  
[AWS Solutions Library | Amazon Web Services | AWS](https://aws.amazon.com/solutions/)  
## Stateless Web App
Scaling horizontally, with a load balancer，  
Scaling horizontally, with an auto-scaling group  
Making our app multi-AZ  
![saa c03 20230725](https://s3.greenhuang.com/docs/saa_c03-20230725.png)
## Stateful Web App
Stateful applications require the storage and management of session-related data throughout the user's session or interaction, ensuring that the state is preserved even if the backend instances change. This often involves storing session data in a shared database or cache, replicating the data across instances, and synchronizing updates to maintain consistency.  
有状态应用程序需要在整个用户的会话或交互过程中存储和管理与会话相关的数据，以确保即使后端实例发生更改，也能保留状态。这通常涉及将会话数据存储在共享数据库或缓存中、跨实例复制数据以及同步更新以保持一致性。  
1. Introduce Stickiness (Session Affinity) -> storage user data and stay consistence (. The user's session or conversation may be lost in this transition)  
2. Introduce User Cookies -> allow multi instance know user stage (HTTP requests are heavier and Security risk)   
3. Send session_id in Web Cookies and Store / retrieve session data 
4. 
![saa c03 20230725 2](https://s3.greenhuang.com/docs/saa_c03-20230725-2.png)  
![saa c03 20230725 3](https://s3.greenhuang.com/docs/saa_c03-20230725-3.png)  
 ELB sticky sessions
• Web clients for storing cookies and making our web app stateless
• ElastiCache
• For storing sessions (alternative: DynamoDB)
• For caching data from RDS
• Multi AZ
• RDS
• For storing user data
• Read replicas for scaling reads
• Multi AZ for disaster recovery
• Tight Security with security groups referencing each other

## scalable Stateful Web App  
![saa c03 20230725 4](https://s3.greenhuang.com/docs/saa_c03-20230725-4.png)  
![saa c03 20230725 5](https://s3.greenhuang.com/docs/saa_c03-20230725-5.png)  
Aurora Database to have easy Multi-AZ and Read-Replicas
• Storing data in EBS (single instance application)
• Vs Storing data in EFS (distributed application)  
## Well Architected Framework
[AWS Well-Architected - Build secure, efficient cloud applications](https://aws.amazon.com/architecture/well-architected)  
6 Pillars
• 1) Operational Excellence
• 2) Security
• 3) Reliability
• 4) Performance Efficiency
• 5) Cost Optimization
• 6) Sustainability
## Trusted Advisor
Cost optimization  
• Performance  
• Security  
• Fault tolerance  
• Service limits

7 CORE CHECKS
Basic & Developer Support plan
• S3 Bucket Permissions
• Security Groups – Specific Ports
Unrestricted
• IAM Use (one IAM user minimum)
• MFA on Root Account
• EBS Public Snapshots
• RDS Public Snapshots
• Service Limits

# CloudFront
Amazon CloudFront is a content delivery network (CDN) provided by AWS. CDN is a globally distributed network of servers that caches and delivers content from the nearest edge location to the end users, reducing latency and improving the performance of accessing content.  
Amazon CloudFront 是由 AWS 提供的内容交付网络 （CDN）。CDN 是一个全球分布的服务器网络，可缓存内容并将其从最近的边缘站点交付给最终用户，从而减少延迟并提高访问内容的性能。


# Networking
## VPC
In AWS (Amazon Web Services), VPC (Virtual Private Cloud) is a virtual networking service that allows users to create an isolated virtual network within the AWS cloud. It enables users to provision a logically isolated section of the AWS cloud where they can launch AWS resources, such as EC2 instances, RDS databases, and Elastic Load Balancers.  
在AWS（亚马逊网络服务）中，VPC（虚拟私有云）是一种虚拟网络服务，允许用户在AWS云中创建隔离的虚拟网络。它使用户能够预置 AWS 云的逻辑隔离部分，他们可以在其中启动 AWS 资源，例如 EC2 实例、RDS 数据库和弹性负载均衡器。
Secure and Isolated Environment: VPC provides a secure and isolated networking environment within the AWS cloud. Users can create their own private IP address range, subnets, and network access control lists (ACLs) to control inbound and outbound traffic.
安全隔离的环境：VPC 在 AWS 云中提供安全且隔离的网络环境。用户可以创建自己的专用 IP 地址范围、子网和网络访问控制列表 （ACL） 来控制入站和出站流量。
## Subnets
Subnets: VPC allows users to divide their virtual network into multiple subnets, each residing in a specific availability zone. Subnets are used to distribute resources and provide additional network segmentation.
子网：VPC 允许用户将其虚拟网络划分为多个子网，每个子网驻留在特定的可用区中。子网用于分配资源并提供额外的网络分段。
Public and Private Subnets: Subnets in VPC can be categorized into public and private subnets based on their accessibility from the internet. A public subnet is associated with a route table that directs traffic to an internet gateway, allowing resources within the subnet to have direct internet access. In contrast, a private subnet routes traffic through a NAT Gateway or NAT instance if internet access is required.
公有子网和私有子网：VPC 中的子网可以根据其从互联网上的可访问性分为公有子网和私有子网。公有子网与路由表相关联，该路由表将流量定向到互联网网关，从而允许子网中的资源直接访问互联网。相比之下，如果需要互联网访问，私有子网会通过 NAT 网关或 NAT 实例路由流量。
Network ACLs: Each subnet in VPC is associated with a network ACL (Access Control List). Network ACLs act as a firewall by controlling inbound and outbound traffic to and from the subnet. They allow users to define rules that permit or deny specific types of traffic based on IP addresses, protocols, and port numbers.
网络ACL：VPC中的每个子网都与一个网络ACL（访问控制列表）相关联。网络 ACL 通过控制进出子网的入站和出站流量来充当防火墙。它们允许用户定义规则，根据 IP 地址、协议和端口号允许或拒绝特定类型的流量。
## Routing Table
Routing Table: An important component of VPC networking is the routing table. Each subnet in VPC is associated with a routing table that defines how traffic is directed between subnets within the VPC, as well as traffic to and from the internet. The routing table determines whether traffic should flow internally within the VPC or be routed to the Internet Gateway for external communication.
路由表：VPC 联网的重要组成部分是路由表。VPC 中的每个子网都与一个路由表相关联，该路由表定义如何在 VPC 内的子网之间定向流量，以及进出互联网的流量。路由表确定流量是在 VPC 内部流动还是路由到互联网网关进行外部通信。
## Internet Gateway
Public IP and NAT: Each instance that requires internet access is associated with either a public IP address or a private IP address translated via NAT (Network Address Translation). Instances in public subnets have direct public IP addresses assigned, while instances in private subnets use NAT Gateway or NAT Instance to access the internet via translation.
公共 IP 和 NAT：每个需要访问互联网的实例都与通过 NAT（网络地址转换）转换的公共 IP 地址或私有 IP 地址相关联。公有子网中的实例分配了直接公有 IP 地址，而私有子网中的实例使用 NAT 网关或 NAT 实例通过转换访问互联网。
By appropriately configuring the routing table with the Internet Gateway as the target for internet-bound traffic, and setting up appropriate inbound and outbound rules, instances within the VPC can securely communicate with the internet. This allows them to access public services, connect with external resources, and handle inbound traffic from the internet.
通过适当配置路由表，将互联网网关作为互联网绑定流量的目标，并设置适当的入站和出站规则，VPC 内的实例可以安全地与互联网通信。这使他们能够访问公共服务、连接外部资源以及处理来自 Internet 的入站流量
## NAT Gateway and NAT Instance
In AWS VPC (Virtual Private Cloud), both NAT Gateway and NAT Instance serve similar purposes of allowing instances in private subnets to access the internet while preserving the privacy and security of the instances. However, they differ in terms of their management, scalability, and availability.  
在 AWS VPC（虚拟私有云）中，NAT 网关和 NAT 实例具有类似的目的，即允许私有子网中的实例访问互联网，同时保护实例的隐私和安全。但是，它们在管理、可伸缩性和可用性方面有所不同。

|Aspect 方面|NAT Gateway NAT 网关|NAT Instance NAT 实例|
|---|---|---|
|Management 管理|Fully managed AWS service  <br>完全托管的 AWS 服务|Manual configuration as an EC2 instance  <br>手动配置为 EC2 实例|
|Availability 可用性|High availability, automatically distributed across multiple Availability Zones  <br>高可用性，自动分布在多个可用区中|Manual management, need to configure failover mechanisms  <br>手动管理，需要配置故障转移机制|
|Scalability 可扩展性|Automatically scales based on traffic load  <br>根据流量负载自动扩展|Manual provisioning and sizing  <br>手动预配和大小调整|
|Security 安全|Outbound traffic only, does not allow inbound traffic from the internet  <br>仅出站流量，不允许来自互联网的入站流量|More flexibility, can be configured with inbound and outbound traffic rules  <br>更灵活，可配置入站和出站流量规则|
|Complexity 复杂性|Simple setup and management  <br>简单的设置和管理|More customization and management required  <br>需要更多自定义和管理|
|Suitable for 适用于|Most scenarios, high availability and scalability  <br>大多数方案，高可用性和可伸缩性|Advanced networking configurations, fine-grained control and customization  <br>高级网络配置、精细控制和定制|

##  difference of NAT gateway and internet gateway

|Feature 特征|NAT Gateway NAT 网关|Internet Gateway 互联网网关|
|---|---|---|
|Purpose 目的|Provides outbound access 提供出站访问|Enables inbound and outbound  <br>启用入站和出站|
||for instances in private 例如在私人|access between VPC and the  <br>VPC 和|
||subnets 子网|internet 互联网|
|Traffic Direction 交通方向|Outbound 出境|Inbound and Outbound 入站和出站|
|Network Address 网络地址|Performs network address 执行网络地址|Maps public IP addresses to  <br>将公共 IP 地址映射到|
|Translation 译本|translation (NAT) for 翻译 （NAT）|private IP addresses in the  <br>专用 IP 地址|
||instances in private 私有实例|VPC|
||subnets 子网||
|Accessiblity 可访问性|Instances within private 私有实例|Public IP addresses in the  <br>公共 IP 地址在|
||subnet can access the 子网可以访问|VPC resources can be directly  <br>专有网络资源可以直接|
||internet 互联网|accessed from the internet  <br>从互联网访问|
|Security 安全|Instances in a private 私有实例|Provides an additional layer  <br>提供附加层|
||subnet are not directly 子网不是直接的|of security by blocking 通过阻止实现安全性|
||accessible from the 可从|inbound connections from the  <br>来自|
||internet 互联网|internet 互联网|


# Data
## Amazon Redshift
Amazon Redshift is a fully managed, petabyte-scale data warehousing service provided by Amazon Web Services (AWS). It is designed to handle large-scale data analytics workloads and allows businesses to analyze vast amounts of structured and semi-structured data efficiently.  
Amazon Redshift 是由 Amazon Web Services （AWS） 提供的完全托管的 PB 级数据仓库服务。它旨在处理大规模数据分析工作负载，并允许企业有效地分析大量结构化和半结构化数据。
Amazon Redshift is commonly used for various data analytics use cases, including business intelligence, data warehousing, reporting, data exploration, and machine learning. Its managed nature, high performance, scalability, and integration with AWS services make it a popular choice for organizations looking to analyze and derive insights from large datasets.  
Amazon Redshift 通常用于各种数据分析使用案例，包括商业智能、数据仓库、报告、数据探索和机器学习。其托管性质、高性能、可扩展性以及与 AWS 服务的集成使其成为希望从大型数据集分析和获取见解的组织的首选。

# S3
Amazon S3 is an object storage service that allows you to store and retrieve large amounts of unstructured data, such as files, images, videos, and backups. It provides highly durable and scalable storage with industry-leading security and global accessibility. S3 data is organized into buckets, and each object within a bucket is assigned a unique key. S3 is suitable for storing and distributing static content, hosting static websites, data archiving, data backup, and serving as a content delivery network (CDN) origin.
Amazon S3 是一项对象存储服务，允许您存储和检索大量非结构化数据，例如文件、图像、视频和备份。它提供高度持久且可扩展的存储，具有行业领先的安全性和全球可访问性。S3 数据被组织到存储桶中，存储桶中的每个对象都被分配一个唯一的键。S3 适用于存储和分发静态内容、托管静态网站、数据存档、数据备份以及充当内容分发网络 （CDN） 源。
In summary, Amazon S3 is an object storage service suitable for storing and retrieving unstructured data, while Amazon EFS is a scalable and shared file storage service for use cases requiring shared file systems among multiple EC2 instances.
总之，Amazon S3 是一种对象存储服务，适用于存储和检索非结构化数据，而 Amazon EFS 是一种可扩展的共享文件存储服务，适用于需要在多个 EC2 实例之间共享文件系统的使用案例。
## security
+ User-Based  IAM Policies – which API calls should be allowed for a specific user from IAM 基于用户的 • IAM 策略 – 应允许特定用户从 IAM 调用哪些 API  
+ Resource-Based Bucket Policies – bucket wide rules from the S3 console - allows cross account 基于资源 • 存储桶策略 – 来自 S3 控制台的存储桶范围规则 – 允许跨账户  
## S3 Bucket Policies
```json
{
  "Version": "2012-10-17",
  "Id": "MyBucketPolicy",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": [
        "arn:aws:s3:::example-bucket/*"
      ]
    }
  ]
}

```
In this specific example, the policy allows public read access to objects in the `example-bucket`. You can further customize your S3 Bucket Policy to grant or restrict access based on specific IP addresses, IAM roles, or specific AWS accounts.   在此特定示例中，策略允许对 中的 `example-bucket` 对象进行公共读取访问。您可以进一步自定义 S3 存储桶策略，以根据特定 IP 地址、IAM 角色或特定 AWS 账户授予或限制访问权限。  
- The `Effect` field can be set to `"Allow"` or `"Deny"`, indicating the access control decision.  
    该 `Effect` 字段可以设置为 `"Allow"` 或 `"Deny"` ，指示访问控制决策。
- The `Principal` field defines who the policy statement applies to. `"*"` indicates it applies to all principals.  
    该 `Principal` 字段定义策略语句适用于谁。 `"*"` 指示它适用于所有主体。
- The `Action` field specifies the S3 actions that are allowed or denied.  
    该 `Action` 字段指定允许或拒绝的 S3 操作。
- The `Resource` field specifies the resources (S3 objects or buckets) to which the policy applies. Here, it allows read access to objects in the `example-bucket`.  
    该 `Resource` 字段指定应用策略的资源（S3 对象或存储桶）。在这里，它允许对 中的 `example-bucket` 对象进行读取访问。

## S3 Storage Classes Comparison
![saa c03 20230807](https://s3.greenhuang.com/docs/saa_c03-20230807.png)
![](https://s3.greenhuang.com/docs/saa_c03-20230817.png)
## Lifecycle Rules
+ Transition Actions – configure objects to transition to another storage class 转换操作 – 配置对象以转换到另一个存储类别  
+ Expiration actions – configure objects to expire (delete) after some time 过期操作 – 配置对象在一段时间后过期（删除） 
```json
{
  "Rules": [
    {
      "ID": "TransitionRule",
      "Status": "Enabled",
      "Transitions": [
        {
          "Days": 30,
          "StorageClass": "STANDARD_IA"
        },
        {
          "Days": 90,
          "StorageClass": "GLACIER"
        }
      ],
      "Expiration": {
        "Days": 365
      }
    }
  ]
}

```
- The `Transitions` array specifies two transition actions based on the object's age: after 30 days, objects are moved from Standard to Standard-IA, and after 90 days, objects are moved from Standard-IA to Glacier.  
    该 `Transitions` 数组根据对象的存在时间指定两个转换操作：30 天后，对象将从标准 - IA 移动到标准 - IA，90 天后，对象从标准 - IA 移动到 Glacier。
- The `Expiration` field specifies that objects should be permanently deleted after 365 days.  
    该 `Expiration` 字段指定应在 365 天后永久删除对象。、

# Advance storage service
## snow family
The "Snow" prefix in various AWS services refers to a family of physical data transfer and storage devices designed for offline data transfer and migration in scenarios where transferring data over the internet may not be feasible, practical, or cost-effective.
各种 AWS 服务中的“Snow”前缀是指一系列物理数据传输和存储设备，专为离线数据传输和迁移而设计，适用于通过 Internet 传输数据可能不可行、不实用或不经济高效的情况。
Yes, you can think of the Snow services as portable storage devices that enable you to copy and transfer large amounts of data to AWS. They are physical devices that you can use to store data and then ship to AWS data centers for offline data transfer.  
是的，您可以将 Snow 服务视为便携式存储设备，使您能够将大量数据复制并传输到 AWS。它们是物理设备，可用于存储数据，然后运送到 AWS 数据中心进行离线数据传输。
## Amazon FSx
Amazon FSx is a fully managed, scalable, and high-performance file storage service provided by AWS. It simplifies the deployment and management of file systems for various use cases, such as Windows-based applications, high-performance computing (HPC), machine learning, media processing, and electronic design automation.
Amazon FSx 是由 AWS 提供的一项完全托管、可扩展且高性能的文件存储服务。它简化了各种用例的文件系统部署和管理，例如基于 Windows 的应用程序、高性能计算 （HPC）、机器学习、媒体处理和电子设计自动化。
## AWS Storage Gateway
AWS Storage Gateway is a hybrid cloud storage service that connects on-premises environments with AWS cloud storage seamlessly. It enables you to extend your on-premises storage infrastructure to the cloud, providing a unified view of both on-premises and AWS storage resources.
AWS Storage Gateway 是一种混合云存储服务，可将本地环境与 AWS 云存储无缝连接。它使您能够将本地存储基础设施扩展到云，从而提供本地和 AWS 存储资源的统一视图。
You install a software appliance called the Storage Gateway on your on-premises infrastructure as a virtual machine (VM) or a physical appliance. 在本地基础架构上将名为存储网关的软件设备作为虚拟机 （VM） 或物理设备安装。The Storage Gateway connects to your local storage systems and provides access to AWS storage services. 存储网关连接到您的本地存储系统，并提供对 AWS 存储服务的访问。 
Once deployed, the Storage Gateway integrates with various AWS services, such as Amazon S3, Amazon EBS, AWS Glacier, and AWS IAM. 部署后，Storage Gateway 可与各种 AWS 服务集成，例如 Amazon S3、Amazon EBS、AWS Glacier 和 AWS IAM。 It enables you to leverage AWS storage services for backup, archives, disaster recovery, and data migration. 它使您能够利用 AWS 存储服务进行备份、存档、灾难恢复和数据迁移。

- File Gateway: Provides a file interface, allowing you to store and access files in Amazon S3. It also supports features like deduplication, compression, and encryption.  
    文件网关：提供文件接口，允许您在 Amazon S3 中存储和访问文件。它还支持重复数据删除、压缩和加密等功能。
- Volume Gateway: 卷网关：
    - Stored Volumes: Presents your on-premises applications with iSCSI block storage volumes that are backed by Amazon EBS (Elastic Block Store). You can mount these volumes as iSCSI devices.  
        存储卷：为您的本地应用程序提供由 Amazon EBS（弹性块存储）支持的 iSCSI 块存储卷。您可以将这些卷装载为 iSCSI 设备。
    - Cached Volumes: Uses S3 as the primary data storage and caches frequently accessed data on-premises. It provides low-latency access to frequently accessed data while reducing the need for large on-premises storage.  
        缓存卷：使用 S3 作为主数据存储，并在本地缓存经常访问的数据。它提供对频繁访问的数据的低延迟访问，同时减少对大型本地存储的需求。
- Tape Gateway: Supports backup and archiving of data to AWS Glacier and S3 through a virtual tape library (VTL) interface. It emulates industry-standard tape libraries, allowing existing backup software to write data directly to virtual tapes.  
    磁带网关：支持通过虚拟磁带库 （VTL） 接口将数据备份和存档到 AWS Glacier 和 S3。它模拟行业标准磁带库，允许现有备份软件将数据直接写入虚拟磁带。
![saa c03 20230808](https://s3.greenhuang.com/docs/saa_c03-20230808.png)
## DataSync
AWS DataSync is a data transfer service provided by AWS for securely and efficiently moving large amounts of data between on-premises storage systems and AWS cloud storage services. It simplifies and accelerates data migration, content distribution, and data synchronization workflows.  
AWS DataSync 是 AWS 提供的一项数据传输服务，用于在本地存储系统和 AWS 云存储服务之间安全高效地移动大量数据。它简化并加速了数据迁移、内容分发和数据同步工作流。
![saa c03 20230808 1](https://s3.greenhuang.com/docs/saa_c03-20230808-1.png)

# Global Infrastructure
## Amazon CloudFront
Amazon CloudFront is a content delivery network (CDN) provided by Amazon Web Services (AWS). It is a globally distributed network of edge locations designed to deliver content, such as web pages, images, videos, and other static or dynamic assets, to users with low latency and high data transfer speeds.
Amazon CloudFront 是由 Amazon Web Services （AWS） 提供的内容交付网络 （CDN）。它是一个全球分布的边缘站点网络，旨在以低延迟和高数据传输速度向用户交付内容，例如网页、图像、视频和其他静态或动态资产。

CloudFront works by caching content at edge locations located around the world. When a user requests content, CloudFront routes the request to the nearest edge location, minimizing the distance between the user and the server, and reducing latency. If the content is available in the cache, CloudFront delivers it directly from the edge location. If the content is not in the cache, CloudFront retrieves it from the origin server, caches it at the edge location, and delivers it to the user. This caching mechanism improves the performance and reduces the load on the origin server.
CloudFront 的工作原理是在位于世界各地的边缘站点缓存内容。当用户请求内容时，CloudFront 会将请求路由到最近的边缘站点，从而最大限度地减少用户与服务器之间的距离，并减少延迟。如果内容在缓存中可用，CloudFront 会直接从边缘站点传输内容。如果内容不在缓存中，CloudFront 将从源服务器检索内容，将其缓存在边缘站点，然后将其传输给用户。此缓存机制可提高性能并减少源服务器上的负载。
## CloudFront vs S3 Cross Region Replication
CloudFront is a CDN service that caches and delivers content from edge locations worldwide to improve performance and reduce latency.
CloudFront 是一项 CDN 服务，可从全球边缘站点缓存和交付内容，以提高性能并减少延迟。
S3 Cross Region Replication is a data replication feature for S3 that ensures data redundancy and availability in different regions for disaster recovery and compliance purposes.
S3 跨区域复制是 S3 的一项数据复制功能，可确保不同区域的数据冗余和可用性，以实现灾难恢复和合规性目的。
To provide content to worldwide users, you can use both CloudFront and S3 Cross Region Replication together. You can store your content in an S3 bucket and configure Cross Region Replication to replicate the data to multiple regions for redundancy. Then, you can configure CloudFront to use your S3 bucket as an origin and cache the content at edge locations, enabling faster and local access to users worldwide.
要向全球用户提供内容，您可以同时使用 CloudFront 和 S3 跨区域复制。您可以将内容存储在 S3 存储桶中，并将跨区域复制配置为将数据复制到多个区域以实现冗余。然后，您可以将 CloudFront 配置为使用 S3 存储桶作为源，并在边缘站点缓存内容，从而为全球用户提供更快的本地访问。
## Global Accelerator
Network Layer Acceleration: Global Accelerator is designed to improve the performance of applications at the network layer by directing user traffic over the AWS global network backbone. It uses Anycast routing to dynamically route traffic to the nearest AWS edge location, reducing latency and increasing application availability.
网络层加速：全球加速器旨在通过 AWS 全球网络主干引导用户流量，从而提高网络层应用程序的性能。它使用任播路由将流量动态路由到最近的 AWS 边缘站点，从而减少延迟并提高应用程序可用性。
## differences between Amazon CloudFront and AWS Global Accelerator

|Name|Amazon CloudFront Amazon CloudFront|AWS Global Accelerator AWS 全球加速器|
|---|---|---|
|Function 功能|Content Delivery Network (CDN)  <br>内容分发网络 （CDN）|Network Layer Acceleration  <br>网络层加速|
|Content Types 内容类型|Static and dynamic content (web pages, images, videos, APIs)  <br>静态和动态内容（网页、图像、视频、API）|Applications at the network layer  <br>网络层的应用|
|Caching 缓存|Content caching and delivery from edge locations  <br>从边缘站点进行内容缓存和交付|IP Anycast routing and traffic routing over the AWS global network  <br>通过 AWS 全球网络的 IP 任播路由和流量路由|
|Customization 定制|Granular control over caching behavior  <br>对缓存行为的精细控制|Static IP addresses and simplified DNS management  <br>静态 IP 地址和简化的 DNS 管理|
|Health Checks 健康检查|N/A|Application-level health checks and automatic routing to healthy endpoints  <br>应用程序级运行状况检查和到运行状况良好的终端节点的自动路由|
|Load Balancing 负载平衡|N/A|TCP and UDP support for load balancing  <br>TCP 和 UDP 支持负载平衡|
|Use Cases 使用案例|Optimizing content delivery and performance  <br>优化内容交付和性能|Improving application performance, availability, and fault tolerance  <br>提高应用程序性能、可用性和容错能力|

You should consider using Amazon CloudFront in the following cases:  
在以下情况下，您应该考虑使用 Amazon CloudFront：

- Content Delivery: Use CloudFront when you need to deliver various types of content, such as web pages, images, videos, or APIs, to users across the globe. CloudFront's content caching and distribution capabilities help reduce latency and improve performance by delivering content from edge locations closer to end users.  
    内容交付：当您需要向全球用户交付各种类型的内容（例如网页、图像、视频或 API）时，请使用 CloudFront。CloudFront 的内容缓存和分发功能通过从更靠近最终用户的边缘站点交付内容，帮助减少延迟并提高性能。
    
- Dynamic Content: If you have dynamic content that requires customization or processing on the edge, CloudFront, with its Lambda@Edge integration, allows you to run serverless code at the nearest edge location, enabling dynamic content generation and customization.  
    动态内容：如果您有需要在边缘进行自定义或处理的动态内容，CloudFront 及其Lambda@Edge集成允许您在最近的边缘站点运行无服务器代码，从而实现动态内容生成和自定义。
    
- Advanced Control: CloudFront offers granular control over caching behavior, allowing you to define cache duration, manage cache invalidation, customize cache keys, and control content delivery based on specific requirements. This level of control is beneficial when you need precise management of your content delivery.  
    高级控制：CloudFront 提供对缓存行为的精细控制，允许您定义缓存持续时间、管理缓存失效、自定义缓存键以及根据特定要求控制内容交付。当您需要精确管理内容交付时，这种级别的控制是有益的。
    

You should consider using AWS Global Accelerator in the following cases:  
在以下情况下，应考虑使用 AWS 全球加速器：

- Application Performance: Use Global Accelerator when your primary goal is to improve performance, availability, and fault tolerance for your applications at the network layer. Global Accelerator leverages the AWS global network backbone and IP Anycast routing to direct traffic to the nearest edge location, reducing latency and providing consistent client IP addresses.  
    应用程序性能：当您的主要目标是在网络层提高应用程序的性能、可用性和容错能力时，请使用全局加速器。全球加速器利用 AWS 全球网络主干网和 IP 任播路由将流量定向到最近的边缘站点，从而减少延迟并提供一致的客户端 IP 地址。
    
- TCP and UDP Support: Global Accelerator supports load balancing for both TCP and UDP-based applications, making it suitable for a wider range of applications beyond HTTP/HTTPS. If your application relies on UDP or TCP protocols, Global Accelerator can optimize their performance.  
    TCP 和 UDP 支持：全局加速器支持基于 TCP 和 UDP 的应用程序的负载平衡，使其适用于 HTTP/HTTPS 以外的更广泛的应用程序。如果您的应用程序依赖于 UDP 或 TCP 协议，全局加速器可以优化其性能。
    
- Simplified DNS Management: If you require static IP addresses and simplified DNS management for your application endpoints, Global Accelerator assigns static IP addresses to your application and simplifies DNS configuration, providing consistent and easily manageable entry points to your applications.  
    简化的 DNS 管理：如果您需要应用程序终端节点的静态 IP 地址和简化的 DNS 管理，Global Accelerator 会为您的应用程序分配静态 IP 地址并简化 DNS 配置，从而为您的应用程序提供一致且易于管理的入口点。
    

In summary, use CloudFront when you need a content delivery network with caching and customized control over content delivery. On the other hand, use Global Accelerator to optimize application performance at the network layer, provide fault tolerance, and simplify DNS management, especially for TCP and UDP-based applications.  
总之，当您需要具有缓存和对内容交付的自定义控制的内容交付网络时，请使用 CloudFront。另一方面，使用全局加速器在网络层优化应用程序性能，提供容错能力并简化DNS管理，特别是对于基于TCP和UDP的应用程序。

# AWS Integration & Messaging
## SNS (Simple Notification Service)
AWS SNS is a fully managed pub/sub messaging service that enables you to send and receive messages between different software systems, applications, and distributed services. It follows a publish-subscribe pattern, where one component (the publisher) sends messages to SNS topics, and other components (the subscribers) receive and process those messages asynchronously. SNS supports various protocols, including HTTP/HTTPS, email, SMS, push notifications, and Amazon SQS queuing.  
AWS SNS 是一种完全托管的发布/订阅消息收发服务，使您能够在不同的软件系统、应用程序和分布式服务之间发送和接收消息。它遵循发布-订阅模式，其中一个组件（发布者）向 SNS 主题发送消息，其他组件（订阅者）异步接收和处理这些消息。SNS 支持各种协议，包括 HTTP/HTTPS、电子邮件、短信、推送通知和 Amazon SQS 队列。
![saa c03 20230808 3](https://s3.greenhuang.com/docs/saa_c03-20230808-3.png)
## SQS (Simple Queue Service)
AWS SQS is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. It allows you to send, store, and receive messages/messages between different components or systems asynchronously. SQS queues act as buffers or temporary storage spaces for processing messages between the sender and the receiver. It ensures reliable and fault-tolerant message delivery and can handle large and variable message volumes.  
AWS SQS 是一种完全托管的消息队列服务，使您能够分离和扩展微服务、分布式系统和无服务器应用程序。它允许您在不同组件或系统之间异步发送、存储和接收消息/消息。SQS 队列充当缓冲区或临时存储空间，用于处理发送方和接收方之间的消息。它可确保可靠和容错的消息传递，并且可以处理大量可变的消息。

1. Produce Messages: 生成消息：
    
    - Applications send messages to the queue by making an API call and providing the content of the message.  
        应用程序通过进行 API 调用并提供消息内容将消息发送到队列。
    - Messages can include any information like JSON, XML, or plain text, and can contain up to 256KB of data.  
        消息可以包含任何信息，如 JSON、XML 或纯文本，最多可以包含 256KB 的数据。
    - Messages are put into the queue and are not processed immediately until they are actively received.  
        消息被放入队列中，在主动接收消息之前不会立即处理。
2. Consume Messages: 消费消息：
    
    - Clients (also known as consumers or workers) retrieve messages from the queue by calling the receive message API.  
        客户端（也称为使用者或工作线程）通过调用接收消息 API 从队列中检索消息。
    - Once a client receives a message, it becomes temporarily hidden from other consumers for a duration known as the message visibility timeout.  
        客户端收到消息后，它会在称为消息可见性超时的持续时间内暂时对其他使用者隐藏。
    - The client has the responsibility to complete the processing of the message within this timeout.  
        客户端有责任在此超时内完成消息的处理。
3. Message Processing: 消息处理：
    
    - Clients process the received messages based on the business logic of the application.  
        客户端根据应用程序的业务逻辑处理收到的消息。
    - After processing the message, the client must explicitly delete the message from the queue using the delete message API.  
        处理消息后，客户端必须使用删除消息 API 从队列中显式删除消息。
    - If the processing fails or times out, the message automatically becomes visible in the queue again after the visibility timeout period, allowing it to be consumed by another client for processing.  
        如果处理失败或超时，消息将在可见性超时期限后自动再次在队列中可见，从而允许另一个客户端使用它进行处理。

![saa c03 20230808 2](https://s3.greenhuang.com/docs/saa_c03-20230808-2.png)

##  Key Differences between AWS SNS and AWS SQS
![saa c03 20230808 4](https://s3.greenhuang.com/docs/saa_c03-20230808-4.png)
![](https://s3.greenhuang.com/docs/saa_c03-20230818.png)

|Key Differences 主要区别|AWS SNS |AWS SQS |
|---|---|---|
|Messaging Pattern 消息传递模式|Publish-Subscribe pattern  <br>发布-订阅模式|Queue-based messaging pattern  <br>基于队列的消息传递模式|
|Message Persistence 消息持久性|Messages not retained 不保留邮件|Messages retained in the queue  <br>队列中保留的邮件|
|Message Delivery 消息传递|Broadcasted to all subscribers  <br>向所有订阅者广播|Delivered to one receiver at a time  <br>一次交付给一个收件人|
|Scaling 缩放|Ideal for fan-out scenarios  <br>扇出方案的理想选择|Suited for decoupling and load leveling  <br>适用于去耦和负载均衡|
|Use Case Examples 用例示例|Notification system 通知系统|Decoupling components, background tasks  <br>解耦组件、后台任务|
||Fan-out architectures 扇出架构|Asynchronous message processing  <br>异步消息处理|
||Topic filtering 主题筛选|Fault tolerance 容错|

## Amazon Kinesis Data Streams
Amazon Kinesis Data Streams is well-suited for scenarios where real-time processing and analysis of streaming data at scale are required. It helps businesses gain valuable insights and take immediate actions based on the continuously flowing data.
Amazon Kinesis Data Streams 非常适合需要大规模实时处理和分析流数据的场景。它可以帮助企业获得有价值的见解，并根据持续流动的数据立即采取行动。
Amazon Kinesis Data Streams is a fully managed service provided by Amazon Web Services (AWS) that allows you to efficiently collect, process, and analyze streaming data in real-time. It is designed to handle large volumes of streaming data from various sources such as website clickstreams, application logs, IoT device telemetry, and more.  
Amazon Kinesis Data Streams 是由 Amazon Web Services （AWS） 提供的一项完全托管的服务，可让您实时高效地收集、处理和分析流数据。它旨在处理来自各种来源的大量流数据，例如网站点击流、应用程序日志、IoT 设备遥测等。
Scalability and Data Durability: Kinesis Data Streams can handle any amount of streaming data with automatic scaling. It automatically partitions the data across multiple shards to ensure high throughput and data durability. The data is stored in the stream for a specified retention period (default is 24 hours, but can be extended up to 7 days).
可扩展性和数据持久性：Kinesis Data Streams 可以通过自动扩展处理任意数量的流数据。它会自动跨多个分片对数据进行分区，以确保高吞吐量和数据持久性。数据在流中存储指定的保留期（默认值为 24 小时，但可以延长到 7 天）。
Data Delivery Guarantees: Kinesis Data Streams provides exactly-once delivery semantics, ensuring that data is reliably delivered in the same order it was sent. It also supports at-least-once delivery by enabling applications to deduplicate data records based on unique identifiers.
数据传输保证：Kinesis Data Streams 提供恰好一次的交付语义，确保数据以与发送顺序相同的顺序可靠地交付。它还支持至少一次交付，使应用程序能够根据唯一标识符删除重复数据记录。

## Kinesis
Amazon Kinesis is a fully managed service provided by AWS for real-time streaming and processing of large amounts of data. It is designed to handle data in motion and enables you to collect, process, and analyze streaming data from diverse sources like websites, mobile apps, IoT devices, logs, and more. 
Amazon Kinesis 是 AWS 提供的一项完全托管的服务，用于实时流式传输和处理大量数据。它旨在处理动态数据，使您能够收集、处理和分析来自不同来源（如网站、移动应用程序、IoT 设备、日志等）的流数据。
## Kinesis Data Streams
 <mark style="background: #ff0000;">Amazon Kinesis Data Streams: capture, process, and store data streams</mark> Kinesis Data Streams allows you to ingest and process real-time streaming data. Kinesis Data Streams 允许您摄取和处理实时流数据。It can handle data from multiple sources and allows you to process and analyze data in conjunction with other AWS services like Lambda, Kinesis Data Analytics, Elasticsearch, and more. 它可以处理来自多个来源的数据，并允许您与其他 AWS 服务（如 Lambda、Kinesis Data Analytics、Elasticsearch 等）一起处理和分析数据。
![saa c03 20230809](https://s3.greenhuang.com/docs/saa_c03-20230809.png)
A data stream is divided into smaller, independent units called shards.
数据流被划分为更小的独立单元，称为分片。
Each shard is a sequence of records and has a specified capacity (data records per second) and a specified maximum size (storage in MB).
每个分片都是一个记录序列，具有指定的容量（每秒数据记录数）和指定的最大大小（以 MB 为单位的存储）。
As data volume increases, you can scale the number of shards in a data stream to handle higher throughput.
随着数据量的增加，您可以扩展数据流中的分片数量以处理更高的吞吐量。
Data consumers retrieve data records from the shards and process them.
数据使用者从分片中检索数据记录并对其进行处理。
They can perform real-time analytics, apply business logic, enrich data, aggregate statistics, or store data in other systems like S3 or databases.
他们可以执行实时分析、应用业务逻辑、丰富数据、聚合统计信息或将数据存储在其他系统（如 S3 或数据库）中。
You can integrate services like Kinesis Data Analytics, Amazon Redshift, Amazon Elasticsearch, or custom applications to analyze the data in real-time or perform batch processing.
您可以集成 Kinesis Data Analytics、Amazon Redshift、Amazon Elasticsearch 或自定义应用程序等服务，以实时分析数据或执行批处理。
If you want to store the data for longer durations, you can use Kinesis Data Streams with services like S3 or DynamoDB for long-term storage, or Amazon Glue for data cataloging.
如果您想将数据存储更长时间，可以将 Kinesis Data Streams 与 S3 或 DynamoDB 等服务结合使用以进行长期存储，或将 Amazon Glue 用于数据编目。

## Kinesis Data Firehose
 <mark style="background: #ff0000;">Amazon Kinesis Data Firehose: load data streams into AWS data stores</mark> It automatically scales and manages the data delivery to services like Amazon S3, Amazon Redshift, Amazon Elasticsearch Service, and Splunk, without requiring the manual effort of setting up and managing the infrastructure. 它可以自动扩展和管理向 Amazon S3、Amazon Redshift、Amazon Elasticsearch Service 和 Splunk 等服务交付的数据，而无需手动设置和管理基础设施。
![saa c03 20230809 1](https://s3.greenhuang.com/docs/saa_c03-20230809-1.png)

Once the data is ingested, you have the option to enable data transformation in Firehose.
摄取数据后，您可以选择在 Firehose 中启用数据转换。
You can configure transformation operations using AWS Glue DataBrew or AWS Lambda functions to convert, filter, enrich, or aggregate the data.
您可以使用 AWS Glue DataBrew 或 AWS Lambda 函数配置转换操作，以转换、筛选、扩充或聚合数据。
Kinesis Data Firehose allows you to deliver data to various destinations, including AWS services and third-party systems. These are called delivery destinations.
Kinesis Data Firehose 允许您将数据传送到各种目的地，包括 AWS 服务和第三方系统。这些称为交付目的地  
Firehose buffers incoming records before delivering them to the configured destination.
Firehose 会在将传入记录传送到配置的目标之前对其进行缓冲。 
Firehose continuously batches the buffered records and delivers them to the configured destination.
Firehose 持续批处理缓冲的记录，并将其传送到配置的目标。 


## Kinesis Data Analytics
+ <mark style="background: #3CB371;">Kinesis Data Analytics: analyze data streams with SQL or Apache Flink </mark>It provides an SQL language-based environment to perform real-time analytics on streaming data from Kinesis Data Streams or other input sources. 它提供了一个基于 SQL 语言的环境，用于对来自 Kinesis Data Streams 或其他输入源的流数据执行实时分析。Kinesis Data Analytics can be integrated with other AWS services like Lambda, S3, and Redshift to enrich and deliver results or store processed data. Kinesis Data Analytics 可以与其他 AWS 服务（如 Lambda、S3 和 Redshift）集成，以丰富和交付结果或存储处理后的数
## differences between Amazon Kinesis Data Streams and Amazon Kinesis Data Firehose

| Feature 特征                           | Kinesis Data Streams Kinesis 数据流                                                                                          | Kinesis Data Firehose Kinesis Data Firehose                                                                                                  |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Purpose 目的                           | Low-latency, real-time streaming data processing  <br>低延迟、实时流数据处理                                                         | Data ingestion and delivery to various destinations  <br>数据引入和传递到各个目标                                                                        |
| Use Cases 使用案例                       | Real-time analytics, machine learning, complex processing  <br>实时分析、机器学习、复杂处理                                             | Loading data into storage or analytics services without managing infrastructure  <br>将数据加载到存储或分析服务中，而无需管理基础架构                                |
| Data Processing 数据处理                 | Custom applications or AWS Lambda functions with full control over processing logic  <br>自定义应用程序或 AWS Lambda 函数，可完全控制处理逻辑 | Limited data processing capabilities, basic transformations using AWS Glue DataBrew/Lambda  <br>有限的数据处理能力，使用 AWS Glue DataBrew/Lambda 进行基本转换 |
| Scalability 可扩展性                     | Manual or automatic scaling of shards to handle changes in data volumes and throughput  <br>手动或自动扩展分片以处理数据量和吞吐量的变化        | Automatic scaling based on incoming data volume  <br>根据传入数据量自动扩展                                                                             |
| Data Retention 数据保留                  | Configurable data retention for up to 7 days  <br>可配置的数据保留长达 7 天                                                          | No built-in data retention beyond buffering and delivery  <br>除了缓冲和交付之外，没有内置的数据保留                                                            |
| Destination Options 目的地选项            | Streaming to AWS services, third-party systems, or custom applications  <br>流式传输到 AWS 服务、第三方系统或自定义应用程序                    | Pre-built integrations with storage/analytics services, custom HTTP endpoints  <br>与存储/分析服务、自定义 HTTP 端点的预构建集成                                |
| Management/Administration  <br>管理/行政 | Requires management of infrastructure, scaling, data processing, and monitoring  <br>需要管理基础架构、扩展、数据处理和监控                  | Manages infrastructure, automatic scaling, and buffering  <br>管理基础架构、自动扩展和缓冲                                                                 |

## Amazon Kinesis and Amazon Simple Queue Service (SQS)

  

|Feature 特征|Kinesis 运动|SQS|
|---|---|---|
|Message Ordering 消息排序|Maintains order within shards  <br>维持分片内的秩序|FIFO queues guarantee exact order within message groups  <br>先进先出队列保证消息组中的准确顺序|
|||Standard queues provide at-least-once delivery, but overall order might not be preserved  <br>标准队列提供至少一次传递，但可能无法保留整体顺序|
|Scenarios to Use 要使用的方案|Real-time analytics 实时分析|Decoupled applications, distributed systems  <br>解耦应用程序，分布式系统|
||Log processing 日志处理|Reliable message-based processing  <br>可靠的基于消息的处理|
||Continuous monitoring 持续监测|Prioritized message handling  <br>优先消息处理|
||IoT data ingestion 物联网数据引入|Elastic scalability 弹性可扩展性|
||Large-scale data streaming  <br>大规模数据流|

## SQS vs SNS vs Kinesis

|Feature 特征|SQS|SNS|Kinesis 运动|
|---|---|---|---|
|Purpose and Use Cases 目的和用例|Decoupling system components and enabling asynchronous communication  <br>解耦系统组件并实现异步通信|Pub/sub messaging among multiple recipients  <br>多个收件人之间的发布/订阅消息传递|Real-time streaming data processing  <br>实时流数据处理|
|Messaging Pattern 消息传递模式|Message queuing 消息队列|Publish/subscribe 发布/订阅|Data streaming 数据流|
|Message Retention 邮件保留|Messages remain until consumed and deleted  <br>邮件会一直保留，直到被使用和删除|Messages are not retained by default  <br>默认情况下不保留消息|Configurable retention period for data records  <br>可配置的数据记录保留期|
|Message Ordering 消息排序|Standard queues: Best-effort ordering  <br>标准队列：尽力而为的排序|Does not guarantee message ordering across subscribers  <br>不保证订阅者之间的消息排序|Maintains order within shards, no guarantee across shards  <br>维持分片内的秩序，不保证分片之间|
|Event Fanout 事件扇出|Can be used with SNS to fan out messages to multiple SQS queues  <br>可与 SNS 一起使用，将消息扇出到多个 SQS 队列|Native support for sending messages to multiple subscribers  <br>本机支持向多个订阅者发送消息|Parallel processing among multiple consumers through shards  <br>通过分片在多个消费者之间并行处理|
|Data Processing 数据处理|Limited processing capabilities, additional components required  <br>处理能力有限，需要额外的组件|Primarily focuses on message delivery to subscribers  <br>主要关注向订阅者传递消息|Advanced data processing capabilities, real-time analytics, complex processing, transformations  <br>高级数据处理功能、实时分析、复杂处理、转换|
|Management and Scalability  <br>管理和可扩展性|Fully managed, scalable, and reliable  <br>完全托管、可扩展且可靠|Fully managed, scalable, and reliable  <br>完全托管、可扩展且可靠|Fully managed, scalable, and reliable  <br>完全托管、可扩展且可靠|

# Container service
+ Amazon Elastic Container Service (Amazon ECS) Amazon’s own container platform  
+ Amazon Elastic Kubernetes Service (Amazon EKS) Amazon’s managed Kubernetes (open source)  
+ AWS Fargate Amazon’s own Serverless container platform  Works with ECS and with EKS  
+ Amazon ECR: Store container images  

## Amazon ECS (Elastic Container Service)
Amazon ECS (Elastic Container Service) is a highly scalable container orchestration service provided by Amazon Web Services. It simplifies the deployment and management of containerized applications in a highly available and scalable manner.
Amazon ECS（弹性容器服务）是由亚马逊云科技提供的高度可扩展的容器编排服务。它以高度可用且可扩展的方式简化了容器化应用程序的部署和管理。

ECS allows you to run and manage Docker containers on a fleet of EC2 instances or using AWS Fargate, a serverless compute engine for containers. It provides a scalable and flexible platform for deploying and managing containers without having to provision or manage the underlying infrastructure.
ECS 允许您在 EC2 实例队列上运行和管理 Docker 容器，或使用 AWS Fargate（用于容器的无服务器计算引擎）。它提供了一个可扩展且灵活的平台，用于部署和管理容器，而无需预配或管理底层基础架构。

## Amazon Elastic Container Registry (ECR)
Yes, that's correct. Amazon ECR can be considered as a private Docker registry, similar to DockerHub. However, ECR is specifically designed to work within the AWS ecosystem and offers tight integration with other AWS services such as Amazon ECS, AWS Fargate, and Amazon EKS.  
是的，这是正确的。Amazon ECR 可以被视为私有 Docker 注册表，类似于 DockerHub。但是，ECR 专门设计用于在 AWS 生态系统中工作，并提供与其他 AWS 服务（如 Amazon ECS、AWS Fargate 和 Amazon EKS）的紧密集成。 
Like DockerHub, ECR allows you to store, manage, and deploy Docker container images. The major difference is that ECR provides private repositories by default, ensuring that your container images are only accessible to authorized users or systems within your AWS account. This ensures a higher level of security and control over your container images.  
与 DockerHub 一样，ECR 允许您存储、管理和部署 Docker 容器映像。主要区别在于 ECR 默认提供私有存储库，确保您的容器映像仅可供您的 AWS 账户中的授权用户或系统访问。这可确保对容器映像具有更高级别的安全性和控制。

## Amazon Elastic Kubernetes Service (EKS) 
In summary, Amazon EKS simplifies the deployment, management, scaling, and operation of Kubernetes clusters. It provides a fully managed and highly available Kubernetes control plane, seamless integration with AWS services, compatibility with the Kubernetes ecosystem, and strong security. These features make EKS an attractive choice for organizations wanting to leverage Kubernetes for deploying containerized applications on AWS.
总之，Amazon EKS 简化了 Kubernetes 集群的部署、管理、扩展和操作。它提供了一个完全托管且高度可用的 Kubernetes 控制平面、与 AWS 服务的无缝集成、与 Kubernetes 生态系统的兼容性以及强大的安全性。这些功能使 EKS 成为希望利用 Kubernetes 在 AWS 上部署容器化应用程序的组织的有吸引力的选择。
![](https://s3.greenhuang.com/docs/saa_c03-20230809-2.png)
Amazon EKS does not require a file system. By default, EKS uses Amazon Elastic Block Store (EBS) for persistent storage of your containerized applications. Each worker node in an EKS cluster can have its own EBS volumes attached to it, which can be used to store data persistently.  
Amazon EKS 不需要文件系统。默认情况下，EKS 使用 Amazon Elastic Block Store （EBS） 对容器化应用程序进行持久存储。EKS 集群中的每个工作线程节点都可以附加自己的 EBS 卷，这些卷可用于持久存储数据。
However, Kubernetes, the underlying container orchestration system used by EKS, supports various storage options other than EBS, such as network file systems like Amazon EFS or distributed storage systems like Amazon S3. These storage options can be integrated with EKS clusters to meet specific application requirements.  
但是，EKS 使用的底层容器编排系统 Kubernetes 支持 EBS 以外的各种存储选项，例如 Amazon EFS 等网络文件系统或 Amazon S3 等分布式存储系统。这些存储选项可以与 EKS 集群集成，以满足特定的应用要求。 

# Serverless
Serverless is a new paradigm in which the developers don’t have to manage servers anymore... They just deploy code  
Serverless does not mean there are no servers... it means you just don’t manage / provision / see them  
## Architecture
![](https://s3.greenhuang.com/docs/saa_c03-20230813-6.png)
+ Using Cognito to generate temporary credentials with STS to access S3 bucket with restricted policy. App users can directly access AWS resources this way. Pattern can be applied to DynamoDB, Lambda...  
+ Caching the reads on DynamoDB using DAX  
+ Caching the REST requests at the API Gateway level  
+ Security for authentication and authorization with Cognito, STS

![](https://s3.greenhuang.com/docs/saa_c03-20230813-7.png)
+ static content being distributed using CloudFront with S3  
+ We enabled DynamoDB streams to trigger a Lambda function The lambda function had an IAM role which could use SES

![](https://s3.greenhuang.com/docs/saa_c03-20230813-8.png)

# AWS API Gateway
![](https://s3.greenhuang.com/docs/saa_c03-20230813-2.png)
API Gateway simplifies the process of creating and managing APIs, abstracting away common operational tasks and ensuring scalability, security, and performance. It is a crucial component in building modern serverless architectures, microservices, and API-driven applications on AWS.  
API 网关简化了创建和管理 API 的过程，抽象出常见的操作任务，并确保可扩展性、安全性和性能。它是在 AWS 上构建现代无服务器架构、微服务和 API 驱动型应用程序的关键组件。

# Amazon Cognito 
Amazon Cognito is a fully managed service provided by Amazon Web Services (AWS) that simplifies the process of adding authentication, authorization, and user management to your applications. It provides developers with a secure and scalable user directory that can be easily integrated into web, mobile, and server-side applications.  
Amazon Cognito 是由 Amazon Web Services （AWS） 提供的一项完全托管的服务，可简化向应用程序添加身份验证、授权和用户管理的过程。它为开发人员提供了一个安全且可扩展的用户目录，可以轻松集成到 Web、移动和服务器端应用程序中。 
User Directories and User Management: Cognito provides a flexible and scalable user directory, known as a User Pool, where you can store and manage user profiles, attributes, and groups. User Pools can be used as a standalone directory or integrated with existing identity systems. You can define custom user attributes and control which attributes are required, read-only, or invite-only. Additionally, Cognito provides APIs and SDKs for user management operations like account confirmation, password resets, and user profile updates.
用户目录和用户管理：Cognito 提供了一个灵活且可扩展的用户目录，称为用户池，您可以在其中存储和管理用户配置文件、属性和组。用户池可以用作独立目录，也可以与现有身份系统集成。您可以定义自定义用户属性并控制哪些属性是必需的、只读的或仅邀请的。此外，Cognito 还提供用于用户管理操作（如帐户确认、密码重置和用户配置文件更新）的 API 和 SDK。
![](https://s3.greenhuang.com/docs/saa_c03-20230813-3.png)
Secure Token Generation: Cognito issues JSON Web Tokens (JWTs) upon successful authentication, which can be securely passed between your application and backend services to authorize subsequent API requests. These tokens contain user identity information and can be used for secure communication between frontend and backend components.
安全令牌生成：Cognito 在身份验证成功后颁发 JSON Web 令牌 （JWT），可以在应用程序和后端服务之间安全地传递这些令牌，以授权后续 API 请求。这些令牌包含用户标识信息，可用于前端和后端组件之间的安全通信。

![](https://s3.greenhuang.com/docs/saa_c03-20230813-4.png)

# Database
## db type
1. Relational Databases: 关系数据库：
    
    - Amazon RDS (Relational Database Service) - Managed service for relational databases like MySQL, PostgreSQL, MariaDB, Oracle, and Microsoft SQL Server.  
        Amazon RDS（关系数据库服务） - 适用于关系数据库（如 MySQL、PostgreSQL、MariaDB、Oracle 和 Microsoft SQL Server）的托管服务。
    - Amazon Aurora - High-performance, scalable, and fully managed MySQL and PostgreSQL-compatible database engine.  
        Amazon Aurora - 高性能、可扩展且完全托管的 MySQL 和 PostgreSQL 兼容数据库引擎。
    - Amazon Redshift - Fully managed, petabyte-scale data warehouse service for analytics and business intelligence.  
        Amazon Redshift - 用于分析和商业智能的完全托管的 PB 级数据仓库服务。
2. NoSQL Databases: NoSQL数据库：
    
    - Amazon DynamoDB - Fully managed NoSQL database for high-performance, low-latency applications at any scale.  
        Amazon DynamoDB - 完全托管的 NoSQL 数据库，适用于任何规模的高性能、低延迟应用程序。
    - Amazon DocumentDB - Fully managed MongoDB-compatible document database service.  
        Amazon DocumentDB - 完全托管的 MongoDB 兼容文档数据库服务。
    - Amazon Keyspaces (for Apache Cassandra) - Scalable, highly available, and fully managed Apache Cassandra-compatible database service.  
        Amazon Keyspaces （for Apache Cassandra） - 可扩展、高度可用且完全托管的 Apache Cassandra 兼容数据库服务。
3. In-Memory Databases: 内存数据库：
    
    - Amazon ElastiCache - Fully managed in-memory caching service supporting both Memcached and Redis to boost application performance.  
        Amazon ElastiCache - 完全托管的内存中缓存服务，支持 Memcached 和 Redis，可提高应用程序性能。
4. Time Series Databases: 时间序列数据库：
    
    - Amazon Timestream - Fully managed time series database for collecting, storing, and analyzing time-stamped data at scale.  
        Amazon Timestream - 完全托管的时间序列数据库，用于大规模收集、存储和分析带时间戳的数据。
5. Ledger Databases: 账本数据库：
    
    - Amazon Quantum Ledger Database (QLDB) - Fully managed ledger database for maintaining an immutable and verifiable transaction log.  
        Amazon Quantum Ledger Database （QLDB） - 完全托管的账本数据库，用于维护不可变且可验证的事务日志。
6. Graph Databases: 图形数据库：
    
    - Amazon Neptune - Fully managed graph database service that makes it easy to build and run applications that work with highly connected datasets.  
        Amazon Neptune - 完全托管的图形数据库服务，可让您轻松构建和运行处理高度连接数据集的应用程序。
7. Analytics Databases: 分析数据库：
    
    - Amazon Athena - Interactive query service to analyze data in Amazon S3 using standard SQL.  
        Amazon Athena - 交互式查询服务，用于使用标准 SQL 分析 Amazon S3 中的数据。
    - Amazon EMR (Elastic MapReduce) - Managed big data platform to process and analyze vast amounts of data using popular frameworks like Apache Spark, Hadoop, and more.  
        Amazon EMR （Elastic MapReduce） - 托管大数据平台，使用流行的框架（如 Apache Spark、Hadoop 等）处理和分析大量数据。
8. Blockchain Databases: 区块链数据库：
    
    - Amazon Managed Blockchain - Fully managed service for creating and managing scalable blockchain networks.  
        Amazon Managed Blockchain - 用于创建和管理可扩展区块链网络的完全托管服务。
9. Data Lake: 数据湖：
    
    - Amazon S3 (Simple Storage Service) - Object storage service often used as a data lake to collect and store large volumes of structured and unstructured data.  
        Amazon S3（简单存储服务） - 对象存储服务，通常用作数据湖来收集和存储大量结构化和非结构化数据。

## DynamoDB
1. NoSQL Database: DynamoDB is a NoSQL database, meaning it does not use the traditional relational structure with fixed schemas and tables. Instead, it provides a flexible data model, allowing you to store structured, semi-structured, and unstructured data without needing a predefined schema.  
    NoSQL 数据库：DynamoDB 是一个 NoSQL 数据库，这意味着它不使用具有固定模式和表的传统关系结构。相反，它提供了一个灵活的数据模型，允许您存储结构化、半结构化和非结构化数据，而无需预定义的架构。
    
2. Key-Value Store: DynamoDB uses a key-value store model for data storage. Each item in the database consists of a primary key (composed of one or two attributes) and an associated value. The primary key enables efficient retrieval of items.  
    键值存储：DynamoDB 使用键值存储模型进行数据存储。数据库中的每个项目都由一个主键（由一个或两个属性组成）和一个关联的值组成。主键可以高效检索项目。
    
3. Scalability and Performance: DynamoDB is designed to scale horizontally, allowing you to handle large volumes of traffic and massive amounts of data. It automatically partitions and distributes data across multiple servers to provide near-linear scalability. You can increase or decrease throughput capacity based on your application's needs.  
    可扩展性和性能：DynamoDB 旨在水平扩展，使您能够处理大量流量和大量数据。它自动在多个服务器之间分区和分发数据，以提供近乎线性的可扩展性。您可以根据应用程序的需求增加或减少吞吐容量。

![](https://s3.greenhuang.com/docs/saa_c03-20230813.png) 
### DynamoDB Accelerator (DAX)
Help solve read congestion by caching  
![](https://s3.greenhuang.com/docs/saa_c03-20230813-1.png)  

# Data & Analytics
## Amazon Athena
Amazon Athena is an interactive serverless query service provided by AWS. It allows you to analyze data stored in Amazon S3 using standard SQL queries without the need for provisioning or managing infrastructure.  
Amazon Athena 是 AWS 提供的一项交互式无服务器查询服务。它允许您使用标准 SQL 查询分析 Amazon S3 中存储的数据，而无需预置或管理基础设施。
1. Serverless Architecture: Athena is a serverless service, meaning that you don't have to provision and manage any underlying infrastructure. It automatically scales resources based on the size and complexity of your queries.  
    无服务器架构：Athena 是一项无服务器服务，这意味着您不必预置和管理任何底层基础设施。它根据查询的大小和复杂性自动缩放资源。
    
2. Analytics on S3 Data: Athena enables you to query data directly from Amazon S3. It supports various data formats like CSV, JSON, Parquet, and ORC. You can analyze structured, semi-structured, and unstructured datasets residing in S3 without the need for data ingestion into a separate database.  
    对 S3 数据的分析：Athena 使您能够直接从 Amazon S3 查询数据。它支持各种数据格式，如CSV，JSON，Parquet和ORC。您可以分析驻留在 S3 中的结构化、半结构化和非结构化数据集，而无需将数据摄取到单独的数据库中。
    
3. Standard SQL Queries: Athena provides compatibility with standard SQL, specifically Presto, allowing you to write SQL queries to analyze data. You can perform aggregations, filtering, joins, and advanced analytics operations on your data using familiar SQL syntax.  
    标准SQL查询：Athena提供与标准SQL的兼容性，特别是Presto，允许您编写SQL查询来分析数据。您可以使用熟悉的 SQL 语法对数据执行聚合、筛选、联接和高级分析操作。

Use Cases for Amazon Athena:  
Amazon Athena 的使用案例：

- Ad-hoc querying and interactive analysis of large datasets stored in Amazon S3.  
    对存储在 Amazon S3 中的大型数据集进行即席查询和交互式分析。
- Data exploration and discovery, especially for unstructured or semi-structured data.  
    数据探索和发现，尤其是非结构化或半结构化数据。
- Log analysis, including processing and querying of logs stored in S3 buckets.  
    日志分析，包括处理和查询存储在 S3 存储桶中的日志。
- Extracting insights from clickstream data, user activity logs, and IoT data.  
    从点击流数据、用户活动日志和 IoT 数据中提取见解。
- Building data pipelines integrating with other AWS services for analytics and reporting.  
    构建与其他 AWS 服务集成的数据管道，以进行分析和报告。

## Redshift
Amazon Redshift is a fully managed, petabyte-scale data warehousing service provided by AWS. It is designed for analyzing large volumes of data with high performance and cost-effectiveness. Redshift utilizes columnar storage and massively parallel processing (MPP) architecture to deliver fast query execution and scalability.  
Amazon Redshift 是由 AWS 提供的一项完全托管的 PB 级数据仓库服务。它旨在以高性能和成本效益分析大量数据。Redshift 利用列式存储和大规模并行处理 （MPP） 架构来提供快速查询执行和可扩展性。
1. Columnar Storage: Redshift stores data in columnar format, which offers advantages for analytical workloads. Columnar storage allows for efficient compression, as it stores data of the same column together, reducing I/O and improving query performance.  
    列式存储：Redshift 以列式格式存储数据，这为分析工作负载提供了优势。列式存储允许高效压缩，因为它将同一列的数据存储在一起，从而减少 I/O 并提高查询性能。
    
2. Massively Parallel Processing (MPP): Redshift divides the data and query workload into smaller parts called slices and distributes them across multiple nodes in a cluster. This parallel processing architecture enables fast execution of complex queries by leveraging the full computing power of the cluster.  
    大规模并行处理 （MPP）：Redshift 将数据和查询工作负载划分为称为切片的较小部分，并将它们分布在集群中的多个节点上。这种并行处理架构通过利用集群的全部计算能力，可以快速执行复杂的查询。
    
3. Scaling and Performance: Redshift allows you to scale the cluster by adding or removing nodes based on your needs. Scaling can be done with zero downtime. By adding more nodes, you can increase storage capacity and compute power, enhancing query performance as the cluster grows.  
    扩展和性能：Redshift 允许您根据需要添加或删除节点来扩展集群。可以在零停机时间的情况下完成扩展。通过添加更多节点，您可以增加存储容量和计算能力，从而随着集群的增长提高查询性能。

Use Cases for Amazon Redshift:  
Amazon Redshift 的使用案例：

- Business intelligence (BI) and reporting: Redshift can handle complex queries and large volumes of data, making it suitable for BI and reporting use cases.  
    商业智能 （BI） 和报告：Redshift 可以处理复杂的查询和大量数据，使其适用于 BI 和报告用例。
- Data warehousing and analytics: Redshift is built for high-performance analytics, enabling ad-hoc analysis, data exploration, and running complex analytical queries.  
    数据仓库和分析：Redshift 专为高性能分析而构建，支持即席分析、数据探索和运行复杂的分析查询。
- Data consolidation: Redshift allows you to consolidate data from multiple sources, such as transactional databases, logs, and IoT devices, into a single data warehouse for unified analysis.  
    数据整合： Redshift 允许您将来自多个来源（例如事务数据库、日志和 IoT 设备）的数据整合到单个数据仓库中以进行统一分析。
- Data archiving and historical analysis: With its columnar storage and compression capabilities, Redshift can efficiently store and analyze historical data for long-term analysis and regulatory compliance.  
    数据归档和历史分析：凭借其列式存储和压缩功能，Redshift 可以有效地存储和分析历史数据，以实现长期分析和法规遵从性。

![](https://s3.greenhuang.com/docs/saa_c03-20230814.png)
Data Transformation: In this step, raw data is transformed into a structured or processed format suitable for analytics or other downstream processes. This process involves activities like cleaning and validating the data, aggregating or summarizing it, performing schema mapping, or adding additional computed columns. Tools like Apache Spark, Python, or SQL can be used for data transformation.
数据转换：在此步骤中，原始数据被转换为适合分析或其他下游流程的结构化或处理格式。此过程涉及清理和验证数据、聚合或汇总数据、执行架构映射或添加其他计算列等活动。Apache Spark，Python或SQL等工具可用于数据转换。

Data Integration: When multiple data sources are involved, integration is necessary to unify data from different origins. This step can involve data consolidation, merging datasets, resolving conflicts, or handling data from different formats or schemas. Integration tools or frameworks, such as Apache Kafka, AWS Glue, or custom ETL (Extract-Transform-Load) pipelines, can handle this process.
数据集成：当涉及多个数据源时，需要集成以统一来自不同来源的数据。此步骤可能涉及数据合并、合并数据集、解决冲突或处理来自不同格式或架构的数据。集成工具或框架（如 Apache Kafka、AWS Glue 或自定义 ETL（提取-转换-加载）管道）可以处理此过程。

Data Analysis and Processing: Once data is prepared and integrated, it can be processed for various analytical purposes or specific business requirements. This step can include running complex SQL queries, data mining, applying machine learning algorithms, generating reports, or building visualizations. Tools like SQL-based querying engines (e.g., Amazon Redshift, Apache Hive), programming languages (e.g., Python, R), or business intelligence platforms can be used for analysis and processing.
数据分析和处理：一旦数据被准备和集成，就可以出于各种分析目的或特定的业务需求进行处理。此步骤可以包括运行复杂的 SQL 查询、数据挖掘、应用机器学习算法、生成报表或生成可视化效果。基于 SQL 的查询引擎（例如 Amazon Redshift、Apache Hive）、编程语言（例如 Python、R）或商业智能平台等工具可用于分析和处理。

## AWS Glue
Certainly! AWS Glue is a fully managed extract, transform, and load (ETL) service that makes it easy to prepare and load data for analytics. It provides capabilities for discovering, cataloging, and transforming your data, making it ready for analysis and querying.  
当然！AWS Glue 是一项完全托管的提取、转换和加载 （ETL） 服务，可让您轻松准备和加载用于分析的数据。它提供了用于发现、编目和转换数据的功能，使其可供分析和查询   
![](https://s3.greenhuang.com/docs/saa_c03-20230815.png)  
![](https://s3.greenhuang.com/docs/saa_c03-20230815-1.png)  

1. Data Catalog: AWS Glue's central component is the Data Catalog, which acts as a metadata repository for all your data assets. It stores metadata about tables, databases, schemas, and connections. The Data Catalog makes it easy to discover and understand your data assets, enabling you to build data-driven applications more efficiently.  
    数据目录：AWS Glue 的核心组件是数据目录，它充当所有数据资产的元数据存储库。它存储有关表、数据库、架构和连接的元数据。通过数据目录，可以轻松发现和了解数据资产，从而更有效地构建数据驱动的应用程序。
    
2. Crawlers: AWS Glue offers automated crawlers that scan your data sources — such as Amazon S3 buckets, RDS databases, or data lakes — and infer the schema and structure of the data. Crawlers automatically discover new data and update the Data Catalog's metadata accordingly, saving you from manual intervention.  
    爬网程序：AWS Glue 提供自动爬网程序，可扫描您的数据源（例如 Amazon S3 存储桶、RDS 数据库或数据湖）并推断数据的架构和结构。爬网程序会自动发现新数据并相应地更新数据目录的元数据，从而避免手动干预。
    
3. Data Preparation and ETL: AWS Glue provides a visual interface for creating data preparation and ETL workflows. Using the Glue DataBrew visual data preparation tool or Apache Spark-based Glue ETL jobs, you can transform and clean your data, converting it into formats suitable for analytics or processing. Glue jobs are scalable and serverless, allowing you to handle large volumes of data efficiently.  
    数据准备和 ETL：AWS Glue 提供了一个可视化界面，用于创建数据准备和 ETL 工作流。使用 Glue DataBrew 可视化数据准备工具或基于 Apache Spark 的 Glue ETL 作业，您可以转换和清理数据，将其转换为适合分析或处理的格式。粘附作业是可扩展且无服务器的，使您能够有效地处理大量数据。
    
4. Data Lake Integration: AWS Glue integrates well with data lakes, such as Amazon S3, providing native data lake ingestion and management capabilities. You can define data lake blueprints to automatically generate a set of orchestrated Glue workflows for data lake ingestion, discovery, and transformation.  
    数据湖集成：AWS Glue 与 Amazon S3 等数据湖很好地集成，提供本机数据湖摄取和管理功能。您可以定义数据湖蓝图，以自动生成一组编排的 Glue 工作流，用于数据湖的摄取、发现和转换

## common architecture for processing streaming data flow
1. Kinesis Data Stream: Set up an Amazon Kinesis Data Stream as the source for your streaming data. This is where your streaming data is ingested and stored.  
    Kinesis Data Stream：设置 Amazon Kinesis Data Stream 作为流数据的源。这是引入和存储流数据的位置。
    
2. AWS Glue Streaming Job: Create an AWS Glue streaming job that reads data from the Kinesis Data Stream. AWS Glue streaming jobs use Apache Spark for processing and transformation. You can define the transformations you need on the streaming data, such as filtering, aggregating, or enriching it.  
    AWS Glue Streaming Job：创建一个从 Kinesis Data Stream 读取数据的 AWS Glue 流式处理任务。AWS Glue 流式处理作业使用 Apache Spark 进行处理和转换。您可以定义流数据所需的转换，例如筛选、聚合或丰富流数据。
    
3. Processing and Transformation: As the streaming data flows into the Kinesis Data Stream, the AWS Glue streaming job continuously reads and processes the data based on the transformation logic defined in your job. The transformed data is then sent to the destination of your choice.  
    处理和转换：当流数据流流入 Kinesis Data Stream 时，AWS Glue 流式处理任务会根据任务中定义的转换逻辑持续读取和处理数据。然后将转换后的数据发送到您选择的目标。
    
4. Destination: You can configure the AWS Glue streaming job to send the transformed data to various destinations, depending on your use case. In your scenario, you can configure it to send the transformed data to Amazon Redshift.  
    目标：您可以配置 AWS Glue 流式处理任务，以将转换后的数据发送到不同的目标，具体取决于您的使用案例。在您的场景中，您可以将其配置为将转换后的数据发送到 Amazon Redshift。
    
5. Amazon Redshift: Once the transformed streaming data is sent to Amazon Redshift, you can perform analytics and analysis on the data using SQL queries. Amazon Redshift is a fully-managed data warehouse solution designed for analyzing large datasets. It enables you to run complex analytics queries efficiently at scale.  
    Amazon Redshift：将转换后的流数据发送到 Amazon Redshift 后，您可以使用 SQL 查询对数据执行分析和分析。Amazon Redshift 是一种完全托管的数据仓库解决方案，专为分析大型数据集而设计。它使您能够大规模高效地运行复杂的分析查询。

# AWS Security & Encryption
## AWS KMS (Key Management Service)
AWS Key Management Service (KMS) is a fully managed service that helps you create and control the encryption keys used to encrypt your data across various AWS services and in your own applications. It provides a secure and scalable way to centrally manage encryption keys, making it easier to meet compliance requirements and protect sensitive data.  
AWS 密钥管理服务 （KMS） 是一项完全托管的服务，可帮助您创建和控制用于跨各种 AWS 服务和您自己的应用程序加密数据的加密密钥。它提供了一种安全且可扩展的方式来集中管理加密密钥，从而更轻松地满足合规性要求并保护敏感数据。
1. Key Generation and Management: AWS KMS allows you to generate and manage encryption keys in a secure and scalable manner. It provides both symmetric and asymmetric key types. With symmetric keys, you can encrypt and decrypt data using the same key. Asymmetric keys involve a key pair: a public key for encryption and a private key for decryption.  
    密钥生成和管理：AWS KMS 允许您以安全且可扩展的方式生成和管理加密密钥。它提供对称和非对称密钥类型。使用对称密钥，可以使用相同的密钥加密和解密数据。非对称密钥涉及密钥对：用于加密的公钥和用于解密的私钥。
2. Key Policies and Fine-Grained Access Control: AWS KMS allows you to define key policies and access control policies that specify who can use and manage your keys. You can set permissions based on IAM users, roles, groups, or specific AWS accounts. This gives you full control over who can access and use your keys.  
    密钥策略和精细访问控制：AWS KMS 允许您定义密钥策略和访问控制策略，以指定谁可以使用和管理您的密钥。您可以根据 IAM 用户、角色、组或特定 AWS 账户设置权限。这使您可以完全控制谁可以访问和使用您的密钥。
    
3. Key Rotation: AWS KMS supports automatic key rotation, allowing you to rotate your keys periodically without impacting your applications or services. Key rotation helps enhance security by regularly changing the encryption keys used for data encryption.  
    密钥轮换：AWS KMS 支持自动密钥轮换，允许您定期轮换密钥，而不会影响您的应用程序或服务。密钥轮换通过定期更改用于数据加密的加密密钥来帮助增强安全性。

## AWS Secrets Manager
AWS Secrets Manager is a fully managed service that enables you to securely store and manage secrets, such as API keys, database credentials, and passwords. It provides a central repository for storing and retrieving sensitive information, making it easier to manage secrets across your AWS infrastructure and applications.  
AWS Secrets Manager 是一项完全托管的服务，使您能够安全地存储和管理密钥，例如 API 密钥、数据库凭证和密码。它提供了一个用于存储和检索敏感信息的中央存储库，使您可以更轻松地跨 AWS 基础设施和应用程序管理密钥。

## differences and use cases for AWS Key Management Service (KMS) and AWS Secrets Manager

|Features 特征|AWS Key Management Service (KMS)  <br>AWS Key Management Service （KMS）|AWS Secrets Manager AWS 密钥管理器|
|---|---|---|
|Key Management 密钥管理|Centralized management of encryption keys for data encryption and decryption.  <br>集中管理用于数据加密和解密的加密密钥。|N/A|
|Secret Management 机密管理|N/A|Centralized storage and management of secrets, such as API keys and database credentials.  <br>集中存储和管理机密，例如 API 密钥和数据库凭据。|
|Encryption 加密|Encrypts data with managed keys stored in KMS.  <br>使用存储在 KMS 中的托管密钥加密数据。|Encrypts secrets at rest using KMS.  <br>使用 KMS 加密静态密钥。|
|Access Control 存取控制|IAM policies manage key access and usage.  <br>IAM 策略管理密钥访问和使用。|IAM policies control secrets access.  <br>IAM 策略控制密钥访问。|
|Secret Rotation 机密轮换|Manual rotation of customer-managed keys and not secret-specific.  <br>手动轮换客户管理的密钥，而不是特定于机密的密钥。|Automated rotation of secrets, such as database credentials.  <br>自动轮换机密，例如数据库凭据。|
|Integration 集成|Used for encryption across various AWS services.  <br>用于跨各种 AWS 服务进行加密。|Integrates with applications and services for retrieving secrets.  <br>与用于检索机密的应用程序和服务集成。|
|Auditing & Logs 审计和日志|CloudTrail provides logs on KMS usage and key operations.  <br>云尾提供KMS使用情况和密钥操作的日志。|CloudTrail offers logs on secret-related actions.  <br>CloudTrail 提供有关机密相关操作的日志。|
|Pricing 定价|Pay for KMS key usage.  <br>支付 KMS 密钥使用费。|Pay for secrets storage and secret rotation.  <br>支付机密存储和机密轮换费用。|
|Use Cases 使用案例|- Encrypting data at rest and in transit.<br>- Compliance and data protection requirements.  <br>- 加密静态和传输中的数据。  <br>- 合规性和数据保护要求。|- Securing API keys, database passwords, and other credentials.<br>- Secrets rotation and management.<br>- Integration with AWS services and applications.  <br>- 保护 API 密钥、数据库密码和其他凭据。  <br>- 机密轮换和管理。  <br>- 与 AWS 服务和应用程序集成。|

## AWS Certificate Manager (ACM)
AWS Certificate Manager (ACM) is a managed service provided by Amazon Web Services that makes it easy to provision, manage, and deploy SSL/TLS certificates for use with AWS services and your applications running on AWS resources.  
AWS 证书管理器 （ACM） 是由 亚马逊云科技提供的一项托管服务，可让您轻松预置、管理和部署 SSL/TLS 证书，以便与 AWS 服务和在 AWS 资源上运行的应用程序一起使用。
